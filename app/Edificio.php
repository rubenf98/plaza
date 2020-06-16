<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Edificio extends Model
{
    protected $fillable = [
        'nome', 'morada'
    ];

    public function blocos()
    {
        return $this->hasMany('App\Bloco');
    }
}
