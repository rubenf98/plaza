<?php

use Illuminate\Database\Seeder;
use App\FracaoEstado;

class FracaoEstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FracaoEstado::Create([
            "estado" => "ocupado"
        ]);

        FracaoEstado::Create([
            "estado" => "vazio"
        ]);
    }
}
