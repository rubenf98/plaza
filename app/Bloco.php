<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bloco extends Model
{
    protected $fillable = [
        'nome'
    ];

    protected $appends = ['divida'];

    public function getDividaAttribute()
    {
        $dividas = $this->dividas;
        $total = 0;
        foreach ($dividas as $divida) {
            $total += $divida->valor;
        }

        return $total;
    }

    public function edificio()
    {
        return $this->belongsTo('App\Edificio');
    }

    public function fracaos()
    {
        return $this->hasMany('App\Fracao');
    }

    public function dividas()
    {
        return $this->morphMany('App\Divida', 'dividable');
    }
}
