<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CreateContentRequest;
use Illuminate\Support\Facades\Schema;
use App\Model\Content;

class ContentController extends Controller
{
    /**
     * Create new content
     * @param App\Http\Requests\CreateContentRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreateContentRequest $request) : JsonResponse
    {
        /** Get content columns array for getting post data
         */
        try {
            $columns = Schema::getColumnListing('contents');
        }
        catch (\Exception $e) {
            logger($e->getMessage());
            return response()->json(['message' => $e->getMessage()], 422);
        }


        /** Try get post data from request object
         *
         * title
         * typeId
         * categoryId
         */
        try {
            $data = $request->only($columns);
        }
        catch (\Exception $e) {
            logger($e->getMessage());
            return response()->json(['message' => $e->getMessage()], 422);
        }

        var_dump($data); die;

/*        if(!isset($data['typeId']) || empty($data['typeId'])){
            $data['typeId'] = 1;
        }*/

        /** Create and fill new content model
         */
        $model = new Content;
        $model->fill($data);

        /** Try save content model
         */
        try {
            $model->save();
        }
        catch (\Exception $e) {
            logger($e->getMessage());
            return response()->json(['message' => $e->getMessage()], 422);
        }


        return response()->json($model, 200);
    }


}
