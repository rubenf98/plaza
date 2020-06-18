<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quota extends Model
{
    //

    public function quotaTipo()
    {
        return $this->belongsTo('App\QuotaTipo');
    }

    public function fracaos()
    {
        return $this->belongsToMany('App\Fracao', 'fracao_has_quotas')->withPivot('data', 'estado');
    }
}
