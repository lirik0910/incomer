<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserCreateRequest extends FormRequest
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
            'password' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'username' => 'string|max:255',
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255',
            'phone' => 'string|max:255',
            'country' => 'string|max:255',
        ];
    }
}
