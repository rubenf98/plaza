<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Fracao extends Model
{
    protected $fillable = [
        'area', 'nome'
    ];

    public function bloco()
    {
        return $this->belongsTo('App\Bloco');
    }

    public function fracaoEstado()
    {
        return $this->belongsTo('App\FracaoEstado');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function quotas()
    {
        return $this->belongsToMany('App\Quota', 'fracao_has_quotas')->withPivot('data', 'estado');
    }

    public static function getNormalQuotas(Fracao $fracao)
    {
        $start = Carbon::now()->subMonths(12);
        return $fracao->quotas()->whereYear('quotas.created_at', Carbon::now()->format('Y'))->get();
    }

    public static function getExtraQuotas(Fracao $fracao)
    {
        $start = Carbon::now()->subMonths(12);
        return $fracao->quotas()->whereYear('quotas.created_at', Carbon::now()->format('Y'))->get();
    }


    public static function getQuotas(Fracao $fracao)
    {
        $start = Carbon::now()->subMonths(12);
        return $fracao->quotas()->whereYear('quotas.created_at', Carbon::now()->format('Y'))->get();
    }
}
