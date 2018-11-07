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
        return view('content.index');
    }
}
