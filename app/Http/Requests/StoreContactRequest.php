<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use JWTAuth;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->header('Authorization') && JWTAuth::setToken($this->header('Authorization'))->user() && true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => JWTAuth::setToken($this->header('Authorization'))->user()->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'message' => 'required|string|max:191|min:3'
        ];
    }

    public function messages()
    {
        return [
            'message.min' => 'A mensagem deverá ter no mínimo 3 caracteres',
            'message.max' => 'A mensagem deverá ter no máximo 191 caracteres',
        ];
    }

    /**
     * Return validation errors as json response
     *
     * @param Validator $validator
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422));
    }
}
