<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;

class Pergunta extends Model
{
    use FiltersRecords;

    public function perguntaTipo()
    {
        return $this->belongsTo('App\PerguntaTipo');
    }
}
