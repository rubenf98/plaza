<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bloco extends Model
{
    protected $fillable = [
        'nome'
    ];

    public function edificio()
    {
        return $this->belongsTo('App\Edificio');
    }

    public function fracaos()
    {
        return $this->hasMany('App\Fracao');
    }
}
