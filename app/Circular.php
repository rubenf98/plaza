<?php

namespace App;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;
use App\CircularTag;

class Circular extends Model
{
    use FiltersRecords;

    protected $fillable = [
        'titulo', 'link'
    ];

    public function tags()
    {
        return $this->belongsToMany('App\CircularTag', 'circular_has_tags');
    }

    public static function countTags()
    {
        $tags = CircularTag::all();
        $response = [];
        $response['all'] = Circular::all()->count();

        foreach ($tags as $tag) {
            $response[$tag->nome] = Circular::whereHas('tags', function ($query) use ($tag) {
                $query->whereNome($tag->nome);
            })->count();
        }

        return $response;
    }
}
