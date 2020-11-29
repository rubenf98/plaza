<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class PerguntaFilters extends QueryFilters
{
    public function search($string)
    {
        $this->query->where(function ($query) use ($string) {
            $query->where('answer', 'like', '%' . $string . '%')
                ->orWhere('question', 'like', '%' . $string . '%');
        });
    }

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
