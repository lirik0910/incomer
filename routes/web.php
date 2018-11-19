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

Route::get('/', 'PageController@index')->name('home');

Route::get('news/{url}', 'PageController@oneNews');

Route::prefix('companies')->group(function(){
    Route::get('/', 'PageController@companies');
    Route::get('/{id}', 'PageController@oneCompany');
});

Route::get('/personal_area', 'PageController@userArea');
Route::get('/profile/{number}', 'PageController@userProfile');

Route::get('/wiki/{url}', 'PageController@wikiPage');



Route::prefix('auth')->group(function () {

    Auth::routes();

    Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

    Route::get('facebook', 'Auth\AuthController@redirectToFacebook');
    Route::get('google', 'Auth\AuthController@redirectToGoogle');
    Route::get('vk', 'Auth\AuthController@redirectToVK');

    Route::get('facebook/callback', 'Auth\AuthController@handleFacebookCallback');
    Route::get('google/callback', 'Auth\AuthController@handleGoogleCallback');
    Route::get('vk/callback', 'Auth\AuthController@handleVKCallback');

});

