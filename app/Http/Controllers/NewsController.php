<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\News\NewsRepository;

class NewsController extends Controller
{
    private $model;

    public function __construct(NewsRepository $model)
    {
        $this->model = $model;
    }

    public function getCompaniesCurrent(Request $request)
    {
        $params = $request->all();
        $params['category_id'] = 1;

        $news = $this->model->current($params);

        return view('components.companies.news_list', ['items' => $news]);
    }
}
