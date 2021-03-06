<?php

namespace App\Providers;

use App\Model\Category;
use App\Repositories\Category\CategoryEloquent;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Chart\ChartEloquent;
use App\Repositories\Chart\ChartRepository;
use App\Repositories\Image\ImageEloquent;
use App\Repositories\Image\ImageRepository;
use App\Repositories\Person\PersonRepository;
use App\Repositories\Person\PersonEloquent;
use App\Repositories\PersonType\PersonTypeEloquent;
use App\Repositories\PersonType\PersonTypeRepository;
use App\Repositories\RSSNews\RSSNewsEloquent;
use App\Repositories\RSSNews\RSSNewsRepository;
use App\Repositories\Section\SectionEloquent;
use App\Repositories\Section\SectionRepository;
use App\Repositories\User\UserEloquent;
use App\Repositories\User\UserRepository;
use App\Repositories\Video\VideoEloquent;
use App\Repositories\Video\VideoRepository;
use App\Repositories\News\NewsEloquent;
use App\Repositories\News\NewsRepository;
use App\Repositories\Tag\TagEloquent;
use App\Repositories\Tag\TagRepository;
use App\Repositories\Comment\CommentEloquent;
use App\Repositories\Comment\CommentRepository;
use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::defaultSimpleView('components.common.pagination_more_button');
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
        $this->app->singleton(NewsRepository::class, NewsEloquent::class);
        $this->app->singleton(TagRepository::class, TagEloquent::class);
        $this->app->singleton(CategoryRepository::class, CategoryEloquent::class);
        $this->app->singleton(SectionRepository::class, SectionEloquent::class);
        $this->app->singleton(PersonTypeRepository::class, PersonTypeEloquent::class);
        $this->app->singleton(ChartRepository::class, ChartEloquent::class);
        $this->app->singleton(RSSNewsRepository::class, RSSNewsEloquent::class);
        $this->app->singleton(CommentRepository::class, CommentEloquent::class);

    }
}
