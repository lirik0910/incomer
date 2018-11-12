<?php

namespace App\Providers;

use App\Repositories\Image\ImageEloquent;
use App\Repositories\Image\ImageRepository;
use App\Repositories\Person\PersonRepository;
use App\Repositories\Person\PersonEloquent;
use App\Repositories\User\UserEloquent;
use App\Repositories\User\UserRepository;
use App\Repositories\Video\VideoEloquent;
use App\Repositories\Video\VideoRepository;
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
        $this->app->singleton(ImageRepository::class, ImageEloquent::class);
        $this->app->singleton(VideoRepository::class, VideoEloquent::class);

    }
}
