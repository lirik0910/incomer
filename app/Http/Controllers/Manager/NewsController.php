<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\NewsCreateRequest;
use App\Http\Requests\NewsUpdateRequest;
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

    public function create(NewsCreateRequest $request)
    {
        try {
            $data = $request->only(['category_id', 'related_id', 'title', 'description', 'introtext', 'onIndex', 'indexPosition', 'images', 'videos', 'tags']);
            $data['creator_id'] = Auth::user()->id;

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

    public function update(NewsUpdateRequest $request, $id)
    {
        try {
            $data = $request->only(['category_id', 'related_id', 'title', 'description', 'introtext', 'onIndex', 'indexPosition', 'published', 'images', 'videos', 'tags']);
            $data['editor_id'] = Auth::user()->id;

            if($data['published']){
                $data['publisher_id'] = $data['editor_id'];
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

    public function destroy($id)
    {
        try {
            $result = $this->model->delete($id);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function restore($id)
    {
        try {
            $res = $this->model->restore($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function trash($id)
    {
        try {
            $res = $this->model->trash($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
