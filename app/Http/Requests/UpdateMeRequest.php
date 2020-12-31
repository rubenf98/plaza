<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;
use JWTAuth;

class UpdateMeRequest extends FormRequest
{
    private $user;
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
            $this->user = JWTAuth::setToken($this->header('Authorization'))->user()->id;

        $this->merge([
            'user_id' => $this->user,
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
            'nome' => 'nullable|string',
            'password' => 'nullable|string|min:4',
            'contacto' => 'nullable|string',
            'email' => Rule::unique('users')->ignore($this->user),
            'fracao' => 'nullable',
            'fracao.1' => 'integer|exists:fracaos,id',
            'b_day' => 'nullable|date'
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
