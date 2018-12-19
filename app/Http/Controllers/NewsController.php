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
        $params['categoryId'] = 1;
        (int)$params['page'] % 2 == 0 ? $params['limit'] = 4 : $params['limit'] = 3;
        //$params['limit'] = 4;

        $news = $this->model->current($params);

        return view('components.companies.news_list', ['items' => $news]);
    }
}
