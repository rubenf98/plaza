<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class PerguntaFilters extends QueryFilters
{
    /**
     * Filter records based on the query parameter "tipo"
     * 
     * @param mixed $string
     * @return void
     */
    public function tipo($string)
    {
        $this->query->whereHas('perguntaTipo', function ($query) use ($string) {
            $query->whereName($string);
        });
    }
}
