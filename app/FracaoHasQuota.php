<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FracaoHasQuota extends Model
{
    public function fracao()
    {
        return $this->belongsTo('App\Fracao');
    }

    public function quota()
    {
        return $this->belongsTo('App\Quota');
    }
}
