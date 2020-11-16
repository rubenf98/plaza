<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    public function tipo()
    {
        return $this->belongsTo('App\ServicoTipo');
    }
}
