<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Repositories\PersonType\PersonTypeRepository;
use Illuminate\Http\Request;

class PersonTypeController extends Controller
{
    private $model;

    public function __construct(PersonTypeRepository $model)
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

    public function show($id)
    {
        try {
            $res = $this->model->get($id);

            return response()->json($res);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

}
