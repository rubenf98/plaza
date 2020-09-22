<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'nome' => $this->nome,
            'photo' => $this->photo,
            'administrador' => 1 && true,
            'contacto' => $this->contacto,
            'b_day' => $this->b_day,
            'fracaos' => MinimalFracaoResource::collection($this->fracaos),
        ];
    }
}
