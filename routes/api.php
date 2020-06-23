<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');
Route::prefix('password')->group(function () {
    Route::get('recover', 'AuthController@recoverPassword');
    Route::post('reset', 'AuthController@resetPassword');
});


Route::apiResource('bloco', 'BlocoController');
Route::apiResource('edificio', 'EdificioController');
Route::apiResource('fracao', 'FracaoController');
Route::apiResource('user', 'UserController');
