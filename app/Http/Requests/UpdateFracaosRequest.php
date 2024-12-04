<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class UpdateFracaosRequest extends FormRequest
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
            'dates' => 'required',
            'dates.*' => 'date',
            'pagamentos' => 'required',
            'pagamentos.*.*' => 'string|in:pago,divida,plano,pendente',
            'fracaos' => 'required',
            'fracaos.*' => 'integer|distinct|exists:fracaos,id',
            'dividas' => 'required|array',
            'extradivida' => 'required|array',
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
