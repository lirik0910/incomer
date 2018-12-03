<?php

namespace App\Http\Controllers;

use App\Repositories\Chart\ChartRepository;
use Illuminate\Http\Request;
use App\Repositories\News\NewsRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Person\PersonRepository;
use App\Helpers\DateFormatter;

class PageController extends Controller
{
    private $newsModel;
    private $videoModel;
    private $personModel;
    private $chartModel;

    public function __construct(
        NewsRepository $newsModel,
        VideoRepository $videoModel,
        PersonRepository $personModel,
        ChartRepository $chartModel)
    {
        $this->newsModel = $newsModel;
        $this->videoModel = $videoModel;
        $this->personModel = $personModel;
        $this->chartModel = $chartModel;
    }

    /*
     * Get
     * @param Request $request
     */
    public function index(Request $request)
    {
        $params = $request->only(['page', 'searchText']);

        $hot = $this->newsModel->hot($params);

        if ($request->ajax()) {
            return view('components.index.hot_news_list', [
                'items' => $hot,
                'dateFormatter' => DateFormatter::class
            ])->render();
        } else {
            //var_dump($params); die;
            $current = $this->newsModel->current($params);
            //var_dump; die;
            $top = $this->newsModel->indexTop();
            $videos = $this->videoModel->index();

            return view('content.index', [
                'view' => 'index',
                'hotNews' => $hot,
                'topNews' => $top,
                'currentNews' => $current,
                'videos' => $videos,
                'dateFormatter' => DateFormatter::class
            ]);
        }


    }

    /*
    * Get companies page
    * @param Request $request
    */
    public function companies(Request $request)
    {
        $params['type_id'] = 2;
        $params['categoryId'] = 1;

        $companies = $this->personModel->sortList($params);

        $news = $this->newsModel->current($params);

        $ids = [];
        foreach ($companies as $item) {
            $ids[] = $item->id;
        }

        $data = $this->chartModel->all($ids);
        $lastPrices = $this->chartModel->lastPrices($ids);

        $filteredChart = [];
        $filteredPrices = [];
        foreach ($data as $point) {
            $filteredChart[$point->person_id][] = (float)$point['close'];
        }

        foreach ($lastPrices as $price) {
            $filteredPrices[$price->person_id] = (float)$price['close'];
        }

/*        foreach ($companies as $company) {
            $company->chart = json_encode($filteredChart[$company->id]);
            $company->lastPrice = $filteredPrices[$company->id];
        }*/

        return view('content.companies', [
            'view' => 'companies',
            'companies' => $companies,
            'news' => $news
        ]);
    }

    /*
    * Get company page
    * @param Request $request
    */
    public function oneCompany(Request $request, $id)
    {
        $company = $this->personModel->get($id);

        $info = [];
        foreach ($company->fields as $field) {
            $info[$field->field_type->title] = $field->value;
        }
        $info['lastPrice'] = $this->chartModel->lastPrice($id)['close'];


        return view('content.company', [
            'view' => 'company',
            'company' => $company,
            'info' => $info,
        ]);
    }

    /*
    * Get cryptocurrencies page
    * @param Request $request
    */
    public function cryptocurrencies(Request $request)
    {
        $params = $request->only(['page']);
        $params['categoryId'] = 3;

        $current = $this->newsModel->current($params);

        if ($request->ajax()) {
            return view('components.cryptocurrencies.current_news_list', [
                'items' => $current,
            ])->render();
        }

        $top = $this->newsModel->categoryTop($params['categoryId']);

        return view('content.cryptocurrency', [
            'view' => 'cryptocurrency',
            'currentNews' => $current,
            'topNews' => $top,
            'dateFormatter' => DateFormatter::class,
        ]);
    }

    /*
    * Get blockchain page
    * @param Request $request
    */
    public function blockchain(Request $request)
    {
        $params = $request->only(['page']);
        $params['categoryId'] = 2;

        $current = $this->newsModel->current($params);

        //var_dump($current); die;
        if ($request->ajax()) {
            return view('components.blockchain.current_news_list', [
                'items' => $current,
            ])->render();
        }

        $top = $this->newsModel->categoryTop($params['categoryId']);

        return view('content.blockchain', [
            'view' => 'blockchain',
            'topNews' => $top,
            'currentNews' => $current,
            'dateFormatter' => DateFormatter::class,
        ]);
    }

    /*
    * Get one news page
    * @param Request $request
    */
    public function oneNews(Request $request, int $id)
    {
        $news = $this->newsModel->one($id);

        if (!$news) {
            throw new \Exception('News was not found');
        }

        $tagRelNews = $this->newsModel->tagsRelatedNews($id);
        $catRelNews = $this->newsModel->categoryRelatedNews($id);

        if (!$this->newsModel->updateViews($id)) {
            throw new \Exception('Cannot update views count');
        }

        return view('content.post', [
            'view' => 'post',
            'item' => $news,
            'tagRel' => $tagRelNews,
            'catRel' => $catRelNews,
            'dateFormatter' => DateFormatter::class,
        ]);
    }

    /*
    * Get user personal area page
    * @param Request $request
    */
    public function userArea(Request $request)
    {
        return view('content.user_private_area', ['view' => 'user_private_area']);
    }

    /*
    * Get user_personal_area page
    * @param Request $request
    */
    public function userProfile(Request $request)
    {
        return view('content.user_profile', ['view' => 'company']);
    }

    /*
     * Get search results
     */
    public function search(Request $request)
    {
        $results = [];
        $params = $request->only('searchText');
        $results['news'] = $this->newsModel->search($params);
        $persons = $this->personModel->search($params)->groupBy('type_id');
        $results['companies'] = $persons[2];

        $all = [];

        foreach ($results as $name => $result) {
            $all[$name] = $result;
        }

        $results = array_merge(['all' => $all], $results);

        return view('components.header.search_results', [
            'results' => $results,
            'dateFormatter' => DateFormatter::class,
        ]);
    }

//    public function manager(Request $request)
//    {
//        return view('layouts.manager', ['view' => 'manager']);
//    }

}
