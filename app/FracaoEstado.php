<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FracaoEstado extends Model
{
    protected $fillable = [
        'estado'
    ];

    public function fracao()
    {
        return $this->hasMany('App\Fracao');
    }
}
