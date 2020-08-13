<?php

namespace App\Http\Resources;

use App\Quota;
use Illuminate\Http\Resources\Json\JsonResource;

class FracaoResource extends JsonResource
{
    private $quota;

    public function __construct($resource)
    {
        parent::__construct($resource);
        $this->resource = $resource;
        $quota = $this->normalQuota();

        $this->quota = $this->normalQuota()->first();
    }
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
            'user' => optional($this->user)->nome,
            'pagamentos' => $this->getNormalQuotas()
        ];
    }
}
