<?php

namespace App\Http\Requests;

use App\Rules\UniqueIf;
use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Support\Str;

class RegisterRequest extends FormRequest
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
        $password = Str::random(8);

        $user = User::where('email', strtolower($this->email))->where('ativo', false)->count();

        $this->merge([
            'password' => $password,
            'exists' => $user > 0 && true,
            'email' => strtolower($this->email)
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
            'email' => ['required', 'email', new UniqueIf],
            'password' => 'required|string|min:6',
            'exists' => 'required',
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
            'message' => $validator->errors()
        ], 422));
    }
}
