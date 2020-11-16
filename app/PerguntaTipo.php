<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;

class PerguntaTipo extends Model
{
    use FiltersRecords;

    public function perguntas()
    {
        return $this->hasMany('App\Pergunta');
    }
}
