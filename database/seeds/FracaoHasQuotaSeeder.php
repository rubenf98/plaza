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
        $year = Carbon::now()->subMonths(12)->format('Y');

        foreach ($fracaos as $fracao) {
            $quota_id = 1;

            $initDate = new Carbon($year . '-01');
            for ($i = 1; $i <= 100; $i++) {
                FracaoHasQuota::create([
                    'fracao_id' => $fracao->id,
                    'quota_id' => $quota_id,
                    'data' => $initDate
                ]);
                $initDate->addMonths(1);
            }
        }
    }
}
