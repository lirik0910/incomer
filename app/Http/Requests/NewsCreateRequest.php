<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:400',
            'category_id' => 'required|integer',
            'related_id' => 'integer',
//            'description' => 'string',
//            'introtext' => 'string',
            'videos' => 'json',
//            'images' => 'json',
//            'tags' => 'json',

        ];
    }
}
