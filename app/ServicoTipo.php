<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicoTipo extends Model
{
    public function servicos()
    {
        return $this->hasMany('App\Servico');
    }
}
