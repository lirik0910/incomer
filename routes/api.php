<?php

use Illuminate\Http\Request;

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

// ID must be only numeric
Route::pattern('id', '[0-9]+');

Route::post('login', 'Manager\AuthController@login');


Route::middleware(['auth:api'])->group(function () {

    Route::get('person', 'Manager\PersonController@index');
    Route::get('person/{id}', 'Manager\PersonController@show');

    Route::post('person', 'Manager\PersonController@store');

    Route::put('person/restore/{id}', 'Manager\PersonController@restore');
    Route::put('person/{id}', 'Manager\PersonController@update');

    Route::delete('person/trash/{id}', 'Manager\PersonController@trash');
    Route::delete('person/{id}', 'Manager\PersonController@destroy');


//    Route::resource('person', 'Manager\PersonController')
//        ->only(['index', 'show', 'store', 'update', 'destroy']);


    Route::resource('user', 'Manager\UserController')
        ->only(['index', 'show', 'store', 'update', 'destroy']);



});