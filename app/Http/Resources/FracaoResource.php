<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FracaoResource extends JsonResource
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
            'nome' => $this->nome,
            'area' => $this->area,
            'estado' => $this->fracaoEstado->estado,
            'user' => $this->user
        ];
    }
}
