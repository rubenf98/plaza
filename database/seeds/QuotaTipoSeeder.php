<?php

use App\QuotaTipo;
use Illuminate\Database\Seeder;

class QuotaTipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        QuotaTipo::Create([
            "nome" => "normal"
        ]);

        QuotaTipo::Create([
            "nome" => "extra"
        ]);
    }
}
