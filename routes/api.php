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

Route::group(['middleware' => 'api'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::put('me', 'AuthController@updateMe');
});

Route::post('register', 'AuthController@register');

Route::prefix('password')->group(function () {
    Route::get('recover', 'AuthController@recoverPassword');
    Route::post('reset', 'AuthController@resetPassword');
});

Route::prefix('selector')->group(function () {
    Route::get('blocos', 'BlocoController@selector');
});


Route::apiResource('blocos', 'BlocoController');
Route::apiResource('circular', 'CircularController');
Route::apiResource('circular-tag', 'CircularTagController');
Route::apiResource('pdf', 'PDFController');
Route::apiResource('image', 'ImageController');
Route::apiResource('edificio', 'EdificioController');
Route::apiResource('fracao', 'FracaoController');
Route::apiResource('users', 'UserController');
Route::apiResource('quota', 'QuotaController');

Route::put('fracao', 'FracaoController@updateFracaos');
