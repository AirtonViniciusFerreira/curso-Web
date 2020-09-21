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


Route::group(['middleware' => 'auth:api'], function(){
    Route::post('debt', 'DebtController@create');
    Route::get('consult', 'DebtController@index');
    Route::get('consultAll', 'DebtController@readAll');
    Route::get('consult/{cpf}', 'DebtController@consult');
    Route::delete('debt/{id}', 'DebtController@delete');
    Route::put('debt/{id}', 'DebtController@update');
    //Route::get('users', 'UserController@index'); função para mostrar todos usuarios
    Route::put('users/{id}', 'UserController@update');
});

Route::post('users', 'UserController@create');
Route::post('login', 'UserController@login');
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/