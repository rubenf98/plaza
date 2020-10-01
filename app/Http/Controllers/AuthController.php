<?php

namespace App\Http\Controllers;

use App\Fracao;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetRecoverPasswordRequest;
use App\Http\Requests\UpdateMeRequest;
use App\Http\Resources\UserResource;
use App\Jobs\SendRegistrationEmail;
use App\Mail\RecoverPasswordMail;
use App\Mail\RegisterMail;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use DB;
use JWTAuth;
use Illuminate\Http\Request;
use App\User;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'updatePhoto']]);
    }

    public function register(RegisterRequest $request)
    {
        $validator = $request->validated();
        DB::beginTransaction();

        $user = User::create([
            'email' => $validator['email'],
            'password' => bcrypt($validator['password']),
        ]);

        DB::commit();

        SendRegistrationEmail::dispatch($user->email, $validator['password']);

        //Mail::to($user->email)->queue(new RegisterMail($validator['password']));

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

        Mail::to($validator['email'])->send(new ResetPasswordMail($validator['email'], $verification_code));

        return response()->json([
            'success' => true,
            'message' => Lang::get('messages.resetPassword.success')
        ]);
    }

    public function recoverPassword(ResetRecoverPasswordRequest $request)
    {
        $validator = $request->validated();

        if ($request->has('token')) {
            $query = DB::table('password_resets')->where('email', $validator['email'])->where('token', $request->token);
            $row = $query->first();

            if ($row) {
                $password = Str::random(16);

                $user = User::where('email', $validator['email'])->first();
                $user->update([
                    'password' => bcrypt($password)
                ]);

                Mail::to($user->email)->send(new RecoverPasswordMail($password));

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
        ]);
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
        $fracao = Fracao::find($validator['fracao_id']);

        $user->update($validator);

        $fracao->user_id = $validator['user_id'];
        $fracao->save();
        DB::commit();
        return new UserResource($user);
    }

    public function updatePhoto(Request $request)
    {
        DB::beginTransaction();

        if ($request->header('Authorization'))
            $user = JWTAuth::setToken($request->header('Authorization'))->user();

        $path = $request->file->store('', 'profile');
        $user->photo = '/profile/' . $path;
        $user->save();

        DB::commit();
        return new UserResource($user);
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
