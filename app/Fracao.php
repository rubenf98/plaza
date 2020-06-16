<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fracao extends Model
{
    protected $fillable = [
        'area', 'nome'
    ];

    public function bloco()
    {
        return $this->belongsTo('App\Bloco');
    }

    public function fracaoEstado()
    {
        return $this->belongsTo('App\FracaoEstado');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
