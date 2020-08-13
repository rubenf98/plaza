<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class FracaoFilters extends QueryFilters
{
    /**
     * Filter records based on the query parameter "bloco"
     * 
     * @param mixed $string
     * @return void
     */
    public function bloco($string)
    {
        $this->query->whereHas('bloco', function ($query) use ($string) {
            $query->whereNome($string);
        });
    }
}
