<?php

namespace App\Providers;

use App\Repositories\Person\PersonRepository;
use App\Repositories\Person\PersonEloquent;
use App\Repositories\User\UserEloquent;
use App\Repositories\User\UserRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Repositories
        $this->app->singleton(PersonRepository::class, PersonEloquent::class);
        $this->app->singleton(UserRepository::class, UserEloquent::class);

    }
}
