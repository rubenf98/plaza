<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArquivoTipo extends Model
{
    public function arquivos()
    {
        return $this->hasMany('App\Arquivo');
    }
}
