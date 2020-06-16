<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quota extends Model
{
    //

    public function transacaos()
    {
        return $this->morphToMany('App\Transacao', 'transacao_destinoables');
    }
}
