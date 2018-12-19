<?php

namespace App\Http\Controllers;

use App\Model\RssNews;
use App\Repositories\Chart\ChartRepository;
use Illuminate\Http\Request;
use App\Repositories\News\NewsRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Person\PersonRepository;
use App\Repositories\User\UserRepository;
use App\Helpers\DateFormatter;
use App\Helpers\MonthDays;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    private $newsModel;
    private $videoModel;
    private $personModel;
    private $chartModel;
    private $userModel;

    public function __construct(
        NewsRepository $newsModel,
        VideoRepository $videoModel,
        PersonRepository $personModel,
        ChartRepository $chartModel,
        UserRepository $userModel)
    {
        $this->newsModel = $newsModel;
        $this->videoModel = $videoModel;
        $this->personModel = $personModel;
        $this->chartModel = $chartModel;
        $this->userModel = $userModel;
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
        $params = $request->all();
        $params['type_id'] = 2;
        $params['categoryId'] = 1;

        $companies = $this->personModel->sortList($params);

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
        foreach ($companies as $key => $company) {
            if(!empty($filteredChart[$company->id])){
                $companies[$key]->chart = json_encode($filteredChart[$company->id]);
            }
            if(!empty($filteredPrices[$company->id])){
                if((int)$filteredPrices[$company->id] < 1){
                    $companyLastPrices = $this->chartModel->lastPrice($company->id);

                    if($company->lastPrice){
                        $company->lastPrice = $companyLastPrices->first()->close;
                    }

                    if($company->beforeLastPrice){
                        $company->beforeLastPrice = $companyLastPrices->last()->close;
                    }
                } else{
                    $company->lastPrice = $filteredPrices[$company->id];

                    if(!empty($this->chartModel->beforeLastPrice($company->id))){
                        $company->beforeLastPrice = $this->chartModel->beforeLastPrice($company->id)->close;
                    }
                }
            } else{
                $companyLastPrices = $this->chartModel->lastPrice($company->id);

                if($company->lastPrice){
                    $company->lastPrice = $companyLastPrices->first()->close;
                }

                if($company->beforeLastPrice){
                    $company->beforeLastPrice = $companyLastPrices->last()->close;
                }
            }

            if(!empty($company->lastPrice) && !empty($company->beforeLastPrice)){
                $company->capitalize = $company->lastPrice * (int)str_replace('.', '', $company->fields->where('field_type.title', 'shares_in_circulation')->first()->value);

                if((float)$company->lastPrice > (float)$company->beforeLastPrice){
                    $company->chevrone = 'up';
                } else{
                    $company->chevrone = 'down';
                }
            }


        }

        if($request->ajax()){

            return view('components.companies.companies_list', [
                'items' => $companies,
            ]);
        }

        $news = $this->newsModel->current($params);


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
        $params = $request->all();

        if($request->ajax()){
            if($params['type'] === 'news'){
                $items = $this->personModel->personNews($id);
                $view = 'components.company.site_news_list';
            } elseif ($params['type'] === 'rss'){
                $items = $rss = $this->personModel->personRss($id);
                $view = 'components.company.rss_list';
            } else{
                return false;
            }

            return view($view, [
                'items' => $items,
                'dateFormatter' => DateFormatter::class
            ]);
        }

        $company = $this->personModel->get($id);
        $news = $this->personModel->personNews($id);
        $rss = $this->personModel->personRss($id);


        $info = [];
        foreach ($company->fields as $field) {
            $info[$field->field_type->title] = $field->value;
        }

        $info['lastPrice'] = $this->chartModel->lastPrice($id)->first()['close'];
        $info['beforeLastPrice'] = $this->chartModel->beforeLastPrice($company->id)['close'];

        if(isset($info['shares_in_circulation'])){
            $info['capitalize'] = $info['lastPrice'] * (int)str_replace('.', '', $info['shares_in_circulation']);
        }


        if((float)$info['lastPrice'] > (float)$info['beforeLastPrice']){
            $company->chevrone = 'up';
        } else{
            $company->chevrone = 'down';
        }

        return view('content.company', [
            'view' => 'company',
            'company' => $company,
            'info' => $info,
            'news' => $news,
            'rss' => $rss,
            'dateFormatter' => DateFormatter::class
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


        if ($request->ajax()) {
            $params['limit'] = 12;

            $current = $this->newsModel->current($params);

            return view('components.cryptocurrencies.current_news_list', [
                'items' => $current,
            ])->render();
        }

        $current = $this->newsModel->current($params);
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
        if(!Auth::user()){
            redirect('/');
        }

        $user = $this->userModel->get(Auth::user()->id);

        if(!$user){
            throw new \Exception('User was not found');
        }

        $month = MonthDays::getMonth();
        $years = range(1940, (int)date('Y'));

        $birthday['year'] = date('Y', strtotime($user->birthday));
        $birthday['month'] = date('m', strtotime($user->birthday));
        $birthday['day'] = date('d', strtotime($user->birthday));

        $days = range(1, MonthDays::getDays($birthday['month'], $birthday['year']));

        $countries = [
            'Молдова', 'Украина', 'Россия', 'Беларусь',
            'Узбекистан', 'Туркменистан', 'Грузия'
        ];
        $cities = [];

        return view('content.user_private_area', [
            'view' => 'user_private_area',
            'user' => $user,
            'days' => $days,
            'month' => $month,
            'years' => $years,
            'birthday' => $birthday,
            'countries' => $countries,
        ]);
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
        if(isset($persons[2])){
            $results['companies'] = $persons[2];
        }

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
