<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuotaTipo extends Model
{
    public function quotas()
    {
        return $this->hasMany('App\Quota');
    }
}
