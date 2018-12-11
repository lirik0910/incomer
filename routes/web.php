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

Route::get('chart/{id}', 'ChartController@index');

Route::prefix('companies')->group(function(){
    Route::get('/', 'PageController@companies');
    Route::get('/{id}', 'PageController@oneCompany');
});

Route::prefix('cryptocurrencies')->group(function (){
    Route::get('/', 'PageController@cryptocurrencies');
});

Route::get('blockchain', 'PageController@blockchain');



Route::prefix('private_area')->group(function (){
    Route::get('/', 'PageController@userArea');
    Route::post('/info', 'UserController@update');
    Route::post('/logo', 'UserController@setLogo');
});
Route::get('/profile/{number}', 'PageController@user_personal_area');

Route::get('/wiki/{url}', 'PageController@wikiPage');

Route::get('/search', 'PageController@search');

//Route::get('/manager', 'PageController@manager');
//Route::get('/manager/{any}', 'PageController@manager');



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

