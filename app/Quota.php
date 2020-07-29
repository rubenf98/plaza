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

    public function quotaTipo()
    {
        return $this->belongsTo('App\QuotaTipo');
    }

    public function fracaos()
    {
        return $this->belongsToMany('App\Fracao', 'fracao_has_quotas')->withPivot('data', 'estado');
    }

    public function scopeNormalQuota($query, $fracao_id)
    {
        return $query->whereQuotaTiposId(1)->whereHas('fracaos', function ($query) use ($fracao_id) {
            $query->whereFracaoId($fracao_id);
        });
    }
}
