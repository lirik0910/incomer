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


Route::namespace('Manager')
    ->middleware(['auth:api'])
    ->group(function () {

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

        // Images routes
        Route::prefix('image')->group(function () {

            Route::get('', 'ImageController@index')->middleware('scope:listImage');
            Route::get('/{id}', 'ImageController@show')->middleware('scope:readImage');

            Route::post('', 'ImageController@store')->middleware('scope:createImage');

            Route::put('/{id}', 'ImageController@update')->middleware('scope:updateImage');

            Route::delete('/{id}', 'ImageController@destroy')->middleware('scope:deleteImage');
        });

        // Videos routes
        Route::prefix('video')->group(function () {

            Route::get('', 'VideoController@index')->middleware('scope:listVideo');
            Route::get('/{id}', 'VideoController@show')->middleware('scope:readVideo');

            Route::post('', 'VideoController@store')->middleware('scope:createVideo');

            Route::put('/{id}', 'VideoController@update')->middleware('scope:updateVideo');

            Route::delete('/{id}', 'VideoController@destroy')->middleware('scope:deleteVideo');
        });

        // News routes
        Route::prefix('news')->group(function () {
            Route::get('', 'NewsController@index')->middleware('scope:listNews');
            Route::get('/{id}', 'NewsController@show')->middleware('scope:readNews');

            Route::get('/create/tags', 'TagController@forContent')->middleware('scope:filterListTag');

            Route::post('', 'NewsController@store')->middleware('scope:createNews');

            Route::put('/restore/{id}', 'NewsController@restore')->middleware('scope:restoreNews');
            Route::put('/{id}', 'NewsController@update')->middleware('scope:updateNews');

            Route::delete('/trash/{id}', 'NewsController@trash')->middleware('scope:trashNews');
            Route::delete('/{id}', 'NewsController@destroy')->middleware('scope:deleteNews');
        });

        // Tags routes
        Route::prefix('tags')->group(function () {

            Route::get('', 'TagController@index')->middleware('scope:listTag');
            Route::get('/{id}', 'TagController@show')->middleware('scope:readTag');

            Route::post('', 'TagController@store')->middleware('scope:createTag');

            Route::put('/restore/{id}', 'TagController@restore')->middleware('scope:restoreTag');
            Route::put('/{id}', 'TagController@update')->middleware('scope:updateTag');

            Route::delete('/trash/{id}', 'TagController@trash')->middleware('scope:trashTag');
            Route::delete('/{id}', 'TagController@destroy')->middleware('scope:deleteTag');
        });

        // Categories routes
        Route::prefix('category')->group(function () {

            Route::get('', 'CategoryController@index')->middleware('scope:listCategory');
            Route::get('/{id}', 'CategoryController@show')->middleware('scope:readCategory');

            Route::post('', 'CategoryController@store')->middleware('scope:createCategory');

            Route::put('/restore/{id}', 'CategoryController@restore')->middleware('scope:restoreCategory');
            Route::put('/{id}', 'CategoryController@update')->middleware('scope:updateCategory');

            Route::delete('/trash/{id}', 'CategoryController@trash')->middleware('scope:trashCategory');
            Route::delete('/{id}', 'CategoryController@destroy')->middleware('scope:deleteCategory');
        });

    });
