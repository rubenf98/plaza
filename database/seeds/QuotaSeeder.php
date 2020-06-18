<?php

use App\Quota;
use App\QuotaTipo;
use Illuminate\Database\Seeder;

class QuotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $tipos = [];
        $quotaTipos = QuotaTipo::all();

        foreach ($quotaTipos as $quotaTipo) {
            $tipos[$quotaTipo->nome] = $quotaTipo->id;
        }

        $items = [
            [
                'quota_tipos_id' => $tipos['normal'],
                "valor" => 20.2
            ],
            [
                'quota_tipos_id' => $tipos['normal'],
                "valor" => 36.5
            ],
            [
                'quota_tipos_id' => $tipos['extra'],
                "valor" => 7.65
            ],
        ];

        foreach ($items as $item) {
            Quota::create($item);
        }
    }
}
