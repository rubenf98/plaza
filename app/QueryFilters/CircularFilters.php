<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class CircularFilters extends QueryFilters
{
    /**
     * Filter records based on the query parameter "tag"
     * 
     * @param mixed $string
     * @return void
     */
    public function tag($string)
    {
        $this->query->whereHas('tags', function ($query) use ($string) {
            $query->whereNome($string);
        });
    }

    public function search($string)
    {
        $this->query->where('titulo', 'like', '%' . $string . '%');
    }
}
