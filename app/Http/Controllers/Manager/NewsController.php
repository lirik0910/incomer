<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\NewsCreate;
use App\Http\Requests\NewsUpdate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\News\NewsRepository;


class NewsController extends Controller
{
    private $model;

    public function __construct(NewsRepository $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        try {
            $params = $request->only(['page', 'filter']);
            $result = $this->model->all($params);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function create(NewsCreate $request)
    {
        try {
            $data = $request->only(['categoryId', 'relatedId', 'title', 'description', 'introtext', 'onIndex', 'indexPosition']);
            $data['creatorId'] = Auth::user()->id;

            $result = $this->model->create($data);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        try {
            $result = $this->model->one($id);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function update(NewsUpdate $request, $id)
    {
        try {
            $data = $request->only(['categoryId', 'relatedId', 'title', 'description', 'introtext', 'onIndex', 'indexPosition', 'published']);
            $data['editorId'] = Auth::user()->id;

            if($data['published']){
                $data['publisherId'] = $data['editorId'];
            }

            $result = $this->model->update($id, $data);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function updateView($id)
    {
        try {
            $news = $this->model->one($id);

            if(!$news){
                return false;
            }

            $data['views'] = (int)$news['views'] + 1;

            $result = $this->model->update($id, $data);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function delete($id)
    {
        try {
            $result = $this->model->delete($id);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
