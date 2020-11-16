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
    Route::post('me/photo', 'AuthController@updatePhoto');
    Route::get('me', 'AuthController@me');
    Route::put('me', 'AuthController@updateMe');
});

Route::post('register', 'AuthController@register');

Route::prefix('password')->group(function () {
    Route::get('recover/{token}', 'AuthController@recoverPassword');
    Route::post('reset', 'AuthController@resetPassword');
});

Route::prefix('selector')->group(function () {
    Route::get('blocos', 'BlocoController@selector');
});

Route::prefix('pdf')->group(function () {
    Route::get('orcamentos/:url', 'OrcamentoController@pdf');
    Route::get('circulares/:url', 'CircularController@pdf');
    Route::get('arquivos/:url', 'ArquivoController@pdf');
});
Route::get('quota/first-and-last', 'QuotaController@firstAndLast');


Route::apiResource('blocos', 'BlocoController');
Route::apiResource('circular', 'CircularController');
Route::apiResource('circular-tag', 'CircularTagController');
Route::apiResource('pdf', 'PDFController');
Route::apiResource('image', 'ImageController');
Route::apiResource('edificio', 'EdificioController');
Route::apiResource('fracao', 'FracaoController');
Route::apiResource('users', 'UserController');
Route::apiResource('quota', 'QuotaController');
Route::apiResource('orcamentos', 'OrcamentoController');
Route::apiResource('arquivos', 'ArquivoController');
Route::apiResource('arquivo-tipos', 'ArquivoTipoController');
Route::apiResource('servico-tipos', 'ServicoTipoController');
Route::apiResource('pergunta-tipos', 'PerguntaTipoController');
Route::apiResource('pergunta', 'PerguntaController');

Route::put('fracao', 'FracaoController@updateFracaos');


