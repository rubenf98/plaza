<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetRecoverPasswordRequest;
use App\Mail\RecoverPasswordMail;
use App\Mail\RegisterMail;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use DB;
use Illuminate\Http\Request;
use App\User;


class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $validator = $request->validated();
        DB::beginTransaction();

        $user = User::create([
            'email' => $validator['email'],
            'password' => bcrypt($validator['password']),
        ]);

        Mail::to($user->email)->send(new RegisterMail($validator['password']));

        DB::commit();

        return response()->json([
            'success' => true,
            'message' => Lang::get('messages.register.success')
        ]);
    }

    public function login(LoginRequest $request)
    {
        $validator = $request->validated();

        try {
            if (!$token = auth()->attempt($validator)) {
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

        return $this->respondWithToken($token);
    }

    public function logout()
    {
        try {
            auth()->logout();

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

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
    }
}
