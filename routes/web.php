<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('manager')->group(function () {
    //return view('content/manager');
    Route::post('/news/create', 'ContentController@create');
    Route::get('/media/', 'ContentController@create');

});

Route::get('/', 'PageController@index')->name('home');

Route::get('news/{url}', 'PageController@oneNews');

Route::prefix('companies')->group(function(){
    Route::get('/', 'PageController@companies');
    Route::get('/{id}', 'PageController@oneCompany');
});

Route::get('/personal_area', 'PageController@userArea');
Route::get('/profile/{number}', 'PageController@userProfile');

Route::get('/wiki/{url}', 'PageController@wikiPage');

Auth::routes();

Route::get('/logout', 'Auth\LoginController@logout')->name('logout' );

Route::prefix('auth')->group(function () {
    Route::get('auth/facebook', 'Auth\AuthController@redirectToFacebook');
    Route::get('auth/facebook/callback', 'Auth\AuthController@handleFacebookCallback');

    Route::get('auth/vk', 'Auth\AuthController@redirectToVK');
    Route::get('auth/vk/callback', 'Auth\AuthController@handleVKCallback');

    Route::get('auth/google', 'Auth\AuthController@redirectToGoogle');
    Route::get('auth/google/callback', 'Auth\AuthController@handleGoogleCallback');

});

