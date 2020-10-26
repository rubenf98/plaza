<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;


class Arquivo extends Model
{
    use FiltersRecords;

    protected $fillable = ['arquivo_tipo_id', 'nome', 'url'];

    public function arquivoTipo()
    {
        return $this->belongsTo('App\ArquivoTipo');
    }
}
