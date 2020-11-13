<?php

namespace App;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Quota;

class Fracao extends Model
{
    use FiltersRecords;

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

    public function normalQuota()
    {
        return Quota::NormalQuota($this->id);
    }

    public function getNormalQuotas($startDate, $endDate)
    {
        $startDate ? $date = Carbon::createFromFormat('Y-m', $startDate) : $date = Carbon::now()->firstOfMonth()->subMonths(10);
        $endDate ? $diff = ($date->diffInMonths($endDate) + 1) : $diff = 11;

        $fracao_id = $this->id;

        $total = [];

        for ($i = 0; $i <=  $diff; $i++) {
            $first = Carbon::now()->month($date->month)->year($date->year)->firstOfMonth();
            $last = Carbon::now()->month($date->month)->year($date->year)->lastOfMonth();

            $quota = $this->normalQuota()->value('id');

            $estado = DB::table('fracao_has_quotas')->whereBetween("data", [$first, $last])->whereFracaoId($fracao_id)->whereQuotaId($quota)->value('estado');

            $total[Carbon::now()->month($date->month)->year($date->year)->firstOfMonth()->toDateString()] = $estado;

            $date->addMonths(1);
        }

        return $total;
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
