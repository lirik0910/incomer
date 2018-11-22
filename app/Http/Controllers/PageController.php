<?php

namespace App\Http\Controllers;

use function foo\func;
use Illuminate\Http\Request;
use App\Model\News;
use App\Repositories\News\NewsRepository;
use App\Repositories\Video\VideoRepository;
use App\Helpers\DateFormatter;

class PageController extends Controller
{
    private $newsModel;
    private $videoModel;

    public function __construct(NewsRepository $newsModel, VideoRepository $videoModel)
    {
        $this->newsModel = $newsModel;
        $this->videoModel = $videoModel;
    }

    /*
     * Get
     * @param Request $request
     */
    public function index(Request $request)
    {
        $params = $request->only(['page', 'searchText']);

        $hot = $this->newsModel->hot($params);
        $current = $this->newsModel->current();
        $top = $this->newsModel->top();

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

    /*
    * Get companies page
    * @param Request $request
    */
    public function companies(Request $request)
    {

        return view('content.companies', ['view' => 'index']);
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
        return view('content.cryptocurrencies', ['view' => 'company']);
    }

    /*
    * Get blockchain page
    * @param Request $request
    */
    public function blockchain(Request $request)
    {
        return view('content.blockchain', ['view' => 'company']);
    }

    /*
    * Get one news page
    * @param Request $request
    */
    public function oneNews(Request $request)
    {
        return view('content.post', ['view' => 'post']);
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

        var_dump($results); die;

        return view('components.header.search_results', ['results' => $results]);
    }
}
