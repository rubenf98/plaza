<?php

use App\Fracao;
use App\FracaoHasQuota;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class FracaoHasQuotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fracaos = Fracao::where('fracao_estado_id', 1)->get();
        $year = Carbon::create(2020, 1, 1, 0, 0, 0)->format('Y');


        foreach ($fracaos as $fracao) {     
            $initDate = new Carbon($year . '-01');
            for ($i = 1; $i <= 12; $i++) {
                FracaoHasQuota::create([
                    'fracao_id' => $fracao->id,
                    'quota_id' => 1,
                    'data' => $initDate
                ]);
                $initDate->addMonths(1);
            }
        }
    }
}
