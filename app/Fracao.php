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
        'area', 'nome', 'divida', 'extradivida'
    ];

    public function bloco()
    {
        return $this->belongsTo('App\Bloco');
    }

    public function fracaoEstado()
    {
        return $this->belongsTo('App\FracaoEstado');
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'fracao_has_users');
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
        //Helper::printToConsole($startDate);
        //$print = new \Symfony\Component\Console\Output\ConsoleOutput();
        $startDate ? $date = Carbon::createFromFormat('Y-m', $startDate) : $date = Carbon::now()->firstOfMonth()->subMonths(10);
        $endDate ? $diff = ($date->diffInMonths($endDate) + 1) : $diff = 11;

        $fracao_id = $this->id;

        $total = [];

        for ($i = 0; $i <= $diff; $i++) {
            $first = new Carbon($date->year . '-' . $date->month);
            $last = (new Carbon($first))->lastOfMonth();


            //$print->writeln($first . ' to ' . $last);

            $quota = $this->normalQuota()->value('id');

            $estado = DB::table('fracao_has_quotas')->whereBetween("data", [$first, $last])->whereFracaoId($fracao_id)->whereQuotaId($quota)->value('estado');

            $total[(new Carbon($date->year . '-' . $date->month))->toDateString()] = $estado;


            $date->addMonths(1);
        }
        //$print->writeln('-----------------------------');
        return $total;
    }

    public function getCell()
    {

        if ($this->bloco_id == 1) {
            return $this->id + 1;
        } else if ($this->bloco_id == 2) {
            return $this->id - 23;
        }
        return $this->id - 47;
    }

    public function getQuotaState($startDate, $endDate)
    {
        $date = Carbon::createFromFormat('Y-m', $startDate);
        $diff = ($date->diffInMonths($endDate));
        $fracao_id = $this->id;
        $total = [];

        for ($i = 0; $i <= $diff; $i++) {
            $first = new Carbon($date->year . '-' . $date->month);
            $last = (new Carbon($first))->lastOfMonth();
            $quota = $this->normalQuota()->value('id');
            $estado = DB::table('fracao_has_quotas')->whereBetween("data", [$first, $last])->whereFracaoId($fracao_id)->whereQuotaId($quota)->value('estado');
            array_push($total, $estado);


            $date->addMonth();
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
