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

        Route::get('', 'PersonController@index')->middleware('scope:listPerson');
        Route::get('/{id}', 'PersonController@show')->middleware('scope:readPerson');

        Route::post('', 'PersonController@store')->middleware('scope:createPerson');

        Route::put('/restore/{id}', 'PersonController@restore')->middleware('scope:restorePerson');
        Route::put('/{id}', 'PersonController@update')->middleware('scope:updatePerson');

        Route::delete('/trash/{id}', 'PersonController@trash')->middleware('scope:trashPerson');
        Route::delete('/{id}', 'PersonController@destroy')->middleware('scope:deletePerson');
    });


    // Users routes
    Route::prefix('user')->group(function () {

        Route::get('', 'UserController@index')->middleware('scope:listUser');
        Route::get('/{id}', 'UserController@show')->middleware('scope:readUser');

        Route::post('', 'UserController@store')->middleware('scope:createUser');

        Route::put('/{id}', 'UserController@update')->middleware('scope:updateUser');

        Route::delete('/{id}', 'UserController@destroy')->middleware('scope:deleteUser');
    });




});