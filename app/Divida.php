<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Divida extends Model
{
    //

    public function dividable()
    {
        return $this->morphTo();
    }
}
