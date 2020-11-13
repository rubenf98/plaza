<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quota extends Model
{
    protected $appends = ['fundoComum', 'total'];

    public function getFundoComumAttribute()
    {
        return round($this->valor * 0.1, 2);
    }

    public function getTotalAttribute()
    {
        return round($this->getFundoComumAttribute() + $this->valor, 2);
    }

    public function fracaos()
    {
        return $this->belongsToMany('App\Fracao', 'fracao_has_quotas')->withPivot('data', 'estado');
    }

    public static function firstQuota()
    {
        return FracaoHasQuota::first()->value('data');
    }

    public static function lastQuota()
    {
        return FracaoHasQuota::latest()->value('data');
    }

    public function scopeNormalQuota($query, $fracao_id)
    {
        return $query->whereNome('normal')->whereHas('fracaos', function ($query) use ($fracao_id) {
            $query->whereFracaoId($fracao_id);
        });
    }
}
