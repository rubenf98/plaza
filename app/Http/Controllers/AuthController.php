<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Mail\RegisterMail;
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

        $verification_code = Str::random(35);
        DB::table('password_resets')->insert(['email' => $user->email, 'token' => $verification_code]);
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

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
    }
}
