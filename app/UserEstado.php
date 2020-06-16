<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserEstado extends Model
{
    protected $fillable = [
        'estado'
    ];

    public function user()
    {
        return $this->hasMany('App\User');
    }
}
