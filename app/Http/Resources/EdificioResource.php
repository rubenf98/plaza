<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EdificioResource extends JsonResource
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
            'morada' => $this->morada,
            'blocos' => BlocoResource::collection($this->blocos),
        ];
    }
}
