<?php

namespace App\Model;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{

    use HasApiTokens, SoftDeletes, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'patronymic', 'last_name', 'email', 'password', 'facebook_id', 'vk_id', 'google_id', 'type', 'username', 'city', 'birthday', 'country', 'logo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function addNewFacebookUser($input)
    {
        $check = static::where('facebook_id', $input['facebook_id'])
            ->orWhere('email', $input['email'])
            ->first();

        if (is_null($check)) {
            return static::create($input);
        }

        return $check;
    }

    public function addNewVKontakteUser($input)
    {
        $check = static::where('vk_id', $input['vk_id'])
            ->orWhere('email', $input['email'])
            ->first();

        if (is_null($check)) {
            return static::create($input);
        }

        return $check;
    }

    public function addNewGoogleUser($input)
    {
        $check = static::where('google_id', $input['google_id'])
            ->orWhere('email', $input['email'])
            ->first();

        if (is_null($check)) {
            return static::create($input);
        }

        return $check;
    }


}
