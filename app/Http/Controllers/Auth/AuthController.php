<?php

namespace App\Http\Controllers\Auth;

use App\Model\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;


class AuthController extends Controller
{


    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function redirectToVK()
    {
        return Socialite::driver('vkontakte')->redirect();
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }


    public function handleFacebookCallback()
    {
//        try {
        $driver = Socialite::driver('facebook');
        $user = $driver->stateless()->user();;

        $create['first_name'] = explode(' ', $user->getName())[0];
        $create['last_name'] = explode(' ', $user->getName())[1];
        $create['email'] = $user->getEmail();
        $create['facebook_id'] = $user->getId();


        $userModel = new User;
        $createdUser = $userModel->addNewFacebookUser($create);
        Auth::loginUsingId($createdUser->id);

        return redirect()->route('home');

//        } catch (\Exception $e) {
//            return redirect('/auth/facebook');
//        }
    }

    public function handleVKCallback()
    {
//        try {
        $user = Socialite::driver('vkontakte')->user();

        $create['first_name'] = explode(' ', $user->getName())[0];
        $create['last_name'] = explode(' ', $user->getName())[1];
        $create['email'] = $user->accessTokenResponseBody['email'];
        $create['vk_id'] = $user->getId();


        $userModel = new User;
        $createdUser = $userModel->addNewVKontakteUser($create);
        Auth::loginUsingId($createdUser->id);

        return redirect()->route('home');

//        } catch (\Exception $e) {
//            return redirect('/auth/vk');
//        }
    }

    public function handleGoogleCallback()
    {
//        try {
        $user = Socialite::driver('google')->user();

        $create['first_name'] = explode(' ', $user->getName())[0];
        $create['last_name'] = explode(' ', $user->getName())[1];
        $create['email'] = $user->getEmail();
        $create['google_id'] = $user->getId();

        $userModel = new User;
        $createdUser = $userModel->addNewGoogleUser($create);
        Auth::loginUsingId($createdUser->id);

        return redirect()->route('home');
//        } catch (Exception $e) {
//            return redirect('/auth/google');
//        }

    }

}