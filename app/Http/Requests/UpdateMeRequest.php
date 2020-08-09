<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;
use JWTAuth;

class UpdateMeRequest extends FormRequest
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

    protected function prepareForValidation()
    {
        if ($this->header('Authorization'))
            $user = JWTAuth::setToken($this->header('Authorization'))->user()->id;

        if ($this->fracao[1])
            $fracao_id = $this->fracao[1];

        $this->merge([
            'user_id' => $user,
            'fracao_id' => $fracao_id
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
            'nome' => 'required|string',
            'password' => 'required|string|min:4',
            'fracao_id' => 'required|integer|exists:fracaos,id',
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
