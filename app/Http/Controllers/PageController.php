<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /*
     * Get index page
     * @param Request $request
     */
    public function index(Request $request)
    {
        return view('content.index', ['view' => 'index']);
    }

    /*
    * Get index page
    * @param Request $request
    */
    public function oneNews(Request $request)
    {
        return view('content.news', ['view' => 'post']);
    }

    /*
    * Get index page
    * @param Request $request
    */
    public function oneCompany(Request $request)
    {
        return view('content.company', ['view' => 'company']);
    }
}
