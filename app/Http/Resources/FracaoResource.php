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
            'divida' => $this->divida,
            'estado' => $this->fracaoEstado->estado,
            'users' => $this->users,
            'pagamentos' => $this->getNormalQuotas($request->startDate, $request->endDate)
        ];
    }
}
