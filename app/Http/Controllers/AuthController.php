<?php

namespace App\Http\Controllers;

use App\Fracao;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetRecoverPasswordRequest;
use App\Http\Requests\UpdateMeRequest;
use App\Http\Resources\UserResource;
use App\Jobs\SendRecoverEmail;
use App\Jobs\SendRegistrationEmail;
use App\Jobs\SendResetEmail;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Str;
use DB;
use JWTAuth;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\File;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'updatePhoto', 'resetPassword', 'recoverPassword', 'getPhoto']]);
    }

    public function register(RegisterRequest $request)
    {
        $validator = $request->validated();
        DB::beginTransaction();

        if ($validator['exists']) {
            $user = User::where('email', $validator['email'])->first();
            $user->password = bcrypt($validator['password']);
            $user->save();
        } else {
            return response()->json([
                'success' => false,
                'message' => Lang::get('messages.register.failAccount')
            ], 422);
        }

        DB::commit();

        SendRegistrationEmail::dispatch($user->email, $validator['password']);

        return response()->json([
            'success' => true,
            'message' => Lang::get('messages.register.success')
        ]);
    }

    public function login(LoginRequest $request)
    {
        $validator = $request->validated();

        try {
            if (!$token = JWTAuth::attempt($validator)) {
                return response()->json([
                    'success' => false,
                    'message' => Lang::get('messages.login.failCredentials')
                ], 404);
            }
        } catch (JWTException $e) {
            return response()->json(
                [
                    'success' => false,
                    'message' => Lang::get('messages.login.failToken')
                ],
                500
            );
        }

        $user = JWTAuth::setToken($token)->user();
        $login = false;

        if (!$user->login) {
            $user->login = true;
            $user->ativo = true;
            $user->save();
            $login = true;
        }

        return $this->respondWithToken($token, $login);
    }

    public function logout(Request $request)
    {
        try {
            JWTAuth::parseToken()->invalidate($request->header('Authorization'));

            return response()->json([
                'success' => true,
                'message' => Lang::get('messages.logout.success')
            ]);
        } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'error' => Lang::get('messages.logout.fail')
            ], 500);
        }
    }

    public function resetPassword(ResetRecoverPasswordRequest $request)
    {
        $validator = $request->validated();

        $verification_code = Str::random(35);

        DB::table('password_resets')->updateOrInsert(
            ['email' => $validator['email']],
            ['token' => $verification_code]
        );
        SendResetEmail::dispatch($validator['email'], $verification_code);

        return response()->json([
            'success' => true,
            'message' => Lang::get('messages.resetPassword.success')
        ]);
    }

    public function recoverPassword($token)
    {
        if ($token) {
            $query = DB::table('password_resets')->where('token', $token);
            $row = $query->first();

            if ($row) {
                $password = Str::random(16);

                $user = User::where('email', $row->email)->first();
                $user->update([
                    'password' => bcrypt($password)
                ]);

                SendRecoverEmail::dispatch($user->email, $password);

                $query->delete();

                return response()->json([
                    'success' => true,
                    'message' => Lang::get('messages.recoverPassword.success')
                ]);
            }
        }

        return response()->json([
            'success' => false,
            'message' => Lang::get('messages.recoverPassword.fail')
        ], 422);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function me(Request $request)
    {
        return $this->respondWithToken($request->header('Authorization'));
    }

    public function updateMe(UpdateMeRequest $request)
    {

        $validator = $request->validated();

        $request->exists('password') && $validator['password'] = bcrypt($validator['password']);

        DB::beginTransaction();
        $user = User::find($validator['user_id']);
        $user->update($validator);

        if ($request->exists('fracao_id') && $request->fracao_id != null) {
            $oldFracao =  Fracao::where('user_id', $user->id)->first();
            if ($oldFracao) {
                $oldFracao->user_id = null;
                $oldFracao->save();
            }

            $fracao = Fracao::find($validator['fracao_id']);
            $fracao->user_id = $validator['user_id'];
            $fracao->save();
        }

        DB::commit();
        return new UserResource($user);
    }

    public function updatePhoto(Request $request)
    {

        DB::beginTransaction();

        if ($request->header('Authorization'))
            $user = JWTAuth::setToken($request->header('Authorization'))->user();

        if ($request->hasFile('photo')) {
            $oldPhoto = $user->photo;
            $oldPhoto !== "/profile/profile-picture.jpg" && File::delete(storage_path($oldPhoto));

            $path = $request->file('photo')->store('', 'profile');
            $user->photo = '/profile/' . $path;
            $user->save();
        }

        DB::commit();
        return new UserResource($user);
    }

    public function getPhoto($file)
    {
        return response()->file(storage_path('profile/' . $file));
    }

    protected function respondWithToken($token, $login = false)
    {
        return response()->json([
            'data' => new UserResource(JWTAuth::setToken($token)->user()),
            'access_token' => $token,
            'token_type' => 'bearer',
            'login' => $login,
        ]);
    }
}
