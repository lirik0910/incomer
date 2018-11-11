<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::tokensCan([
            'listPerson' => 'listPerson description',
            'readPerson' => 'readPerson description',
            'createPerson' => 'createPerson description',
            'restorePerson' => 'restorePerson description',
            'updatePerson' => 'updatePerson description',
            'trashPerson' => 'trashPerson description',
            'deletePerson' => 'deletePerson description',

            'listUser' => 'listUser description',
            'readUser' => 'readUser description',
            'createUser' => 'createUser description',
            'updateUser' => 'updateUser description',
            'deleteUser' => 'deleteUser description',
        ]);

        //routes for manager authentication
        Passport::routes();
    }
}
