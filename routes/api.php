<?php


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


Route::namespace('Manager')->middleware(['auth:api'])->group(function () {

    // Persons routes
    Route::prefix('person')->group(function () {

        Route::get('', 'PersonController@index')->middleware('can:listPerson');
        Route::get('/{id}', 'PersonController@show')->middleware('can:readPerson');

        Route::post('', 'PersonController@store')->middleware('can:createPerson');

        Route::put('/restore/{id}', 'PersonController@restore')->middleware('can:restorePerson');
        Route::put('/{id}', 'PersonController@update')->middleware('can:updatePerson');

        Route::delete('/trash/{id}', 'PersonController@trash')->middleware('can:trashPerson');
        Route::delete('/{id}', 'PersonController@destroy')->middleware('can:deletePerson');
    });


    // Users routes
    Route::prefix('user')->group(function () {

        Route::get('', 'UserController@index')->middleware('can:listUser');
        Route::get('/{id}', 'UserController@show')->middleware('can:readUser');

        Route::post('', 'UserController@store')->middleware('can:createUser');

        Route::put('/{id}', 'UserController@update')->middleware('can:updateUser');

        Route::delete('/{id}', 'UserController@destroy')->middleware('can:deleteUser');
    });




});