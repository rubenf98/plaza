<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CircularTag extends Model
{
    //
    protected $fillable = [
        'nome'
    ];


    public function circulares()
    {
        return $this->belongsToMany('App\Circular', 'circular_has_tags');
    }
}
