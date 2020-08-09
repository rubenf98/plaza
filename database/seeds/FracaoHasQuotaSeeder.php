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

        // give each post some tags
        foreach ($fracaos as $fracao) {
            $quota_id = 2;
            rand(1, 100) < 50 && $quota_id = 1;

            $initDate = new Carbon($year . '-01');
            for ($i = 1; $i <= 18; $i++) {
                FracaoHasQuota::create([
                    'fracao_id' => $fracao->id,
                    'quota_id' => $quota_id,
                    'estado' => "pago",
                    'data' => $initDate
                ]);
                $initDate->addMonths(1);
            }
            for ($i = 18; $i <= 24; $i++) {
                FracaoHasQuota::create([
                    'fracao_id' => $fracao->id,
                    'quota_id' => $quota_id,
                    'data' => $initDate
                ]);
                $initDate->addMonths(1);
            }

            $initDate = new Carbon($year . '-01');

            for ($i = 1; $i <= 6; $i++) {
                FracaoHasQuota::create([
                    'fracao_id' => $fracao->id,
                    'quota_id' => 3,
                    'data' => $initDate
                ]);
                $initDate->addMonths(1);
            }
        }
    }
}
