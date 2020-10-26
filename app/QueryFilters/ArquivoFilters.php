<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class ArquivoFilters extends QueryFilters
{
    /**
     * Filter records based on the query parameter "tipo"
     * 
     * @param mixed $string
     * @return void
     */
    public function tipo($string)
    {
        $this->query->whereHas('arquivoTipo', function ($query) use ($string) {
            $query->where('nome', 'like', '%' . $string . '%');
        });
    }
}
