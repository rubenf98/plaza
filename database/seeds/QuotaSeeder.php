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
        $items = [
            [
                'nome' => 'normal',
            ],
            [
                'nome' => 'extra',
            ],
        ];

        foreach ($items as $item) {
            Quota::create($item);
        }
    }
}
