<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FracaoHasQuota extends Model
{
    protected $fillable = [
        'data', 'estado'
    ];

    public function fracao()
    {
        return $this->belongsTo('App\Fracao');
    }

    public function quota()
    {
        return $this->belongsTo('App\Quota');
    }
}
