<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\SectionCreateRequest;
use App\Http\Requests\SectionUpdateRequest;
use App\Repositories\Section\SectionRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SectionController extends Controller
{
    private $model;

    public function __construct(SectionRepository $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        try {
            $res = $this->model->all([]);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function store(SectionCreateRequest $request)
    {
        try {
            $data = $request->only(['category_id', 'title', 'description']);
            $data['creatorId'] = Auth::user()->id;

            $res = $this->model->create($data);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        try {
            $res = $this->model->get($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function update(SectionUpdateRequest $request, $id)
    {
        try {
            $data = $request->only(['category_id', 'title', 'description']);

            $res = $this->model->update($id, $data);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $res = $this->model->delete($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
