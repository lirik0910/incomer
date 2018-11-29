<?php

namespace App\Http\Controllers;

use function foo\func;
use Illuminate\Http\Request;
use App\Model\News;
use App\Repositories\News\NewsRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Person\PersonRepository;
use App\Helpers\DateFormatter;

class PageController extends Controller
{
    private $newsModel;
    private $videoModel;
    private $personModel;

    public function __construct(NewsRepository $newsModel, VideoRepository $videoModel, PersonRepository $personModel)
    {
        $this->newsModel = $newsModel;
        $this->videoModel = $videoModel;
        $this->personModel = $personModel;
    }

    /*
     * Get
     * @param Request $request
     */
    public function index(Request $request)
    {
        $params = $request->only(['page', 'searchText']);

        $hot = $this->newsModel->hot($params);

        if($request->ajax()){
            return view('components.index.hot_news_list', [
                'items' => $hot,
                'dateFormatter' => DateFormatter::class
            ])->render();
        } else{
            $current = $this->newsModel->current($params);
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

        return view('content.companies', ['view' => 'companies']);
    }

    /*
    * Get company page
    * @param Request $request
    */
    public function oneCompany(Request $request)
    {

        return view('content.company', ['view' => 'company']);
    }

    /*
    * Get cryptocurrencies page
    * @param Request $request
    */
    public function cryptocurrencies(Request $request)
    {
        return view('content.cryptocurrency', ['view' => 'cryptocurrency']);
    }

    /*
    * Get blockchain page
    * @param Request $request
    */
    public function blockchain(Request $request)
    {
        $params = $request->only(['page']);
        $params['categoryId'] = 2;
        if($request->ajax()) $params['limit'] = 12;

        $current = $this->newsModel->current($params);

        if($request->ajax()){
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

        if (!$news){
            throw new \Exception('News was not found');
        }

        if(!$this->newsModel->updateViews($id)){
            throw new \Exception('Cannot update views count');
        }

        return view('content.post', [
            'view' => 'post',
            'item' => $news,
            'dateFormatter' => DateFormatter::class,
        ]);
    }

    /*
    * Get user personal area page
    * @param Request $request
    */
    public function userArea(Request $request)
    {
        return view('content.user_area', ['view' => 'company']);
    }

    /*
    * Get userProfile page
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
        $results['companies'] = $persons ? $persons[2] : [];

        $all = [];

        foreach($results as $name => $result){
            $all[$name] = $result;
        }

        $results = array_merge(['all' => $all], $results);

        return view('components.header.search_results', [
            'results' => $results,
            'dateFormatter' => DateFormatter::class,
        ]);
    }

    public function manager(Request $request)
    {
        return view('layouts.manager', ['view' => 'manager']);
    }

}
