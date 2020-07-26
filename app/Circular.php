<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Circular extends Model
{
    protected $fillable = [
        'titulo', 'link'
    ];

    public function tags()
    {
        return $this->belongsToMany('App\CircularTag', 'circular_has_tags');
    }
}
