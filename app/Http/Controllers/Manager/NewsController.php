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
            $params = $request->only(['page', 'filter', 'sort_column', 'sort_direction', 'query', 'withPatterns']);
            if(!empty($params['withPatterns'])){
                $result = $this->model->withPatterns();
            } else {
                $result = $this->model->all($params);
            }

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function store(NewsCreateRequest $request)
    {
        try {
            $data = $request->only(['category_id', 'section_id', 'related_id', 'title', 'subtitle', 'description', 'introtext', 'preview_pattern', 'type', 'published', 'images', 'videos', 'tags']);
            $data['creator_id'] = Auth::user()->id;

            if(!empty($data['published']) && $data['published']){
                $data['publish_date'] = now();
                $data['publisher_id'] = $data['creator_id'];
            }

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
            $data = $request->only(['category_id', 'section_id', 'related_id', 'title', 'subtitle', 'description', 'introtext', 'preview_pattern', 'type', 'published', 'images', 'videos', 'tags']);

            $data['editor_id'] = Auth::user()->id;

            $oldData = $this->model->one($id);
            if(!$oldData['published'] && $data['published']){
                $data['publish_date'] = now();
                $data['publisher_id'] = Auth::user()->id;
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
