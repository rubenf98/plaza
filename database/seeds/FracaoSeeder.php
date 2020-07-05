<?php

use Illuminate\Database\Seeder;
use App\Fracao;

class FracaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Fracao::Create([
            "fracao_estado_id" => 1,
            "bloco_id" => 3,
            "area" => 23,
            "user_id" => 1,
            "nome" => "AA"
        ]);

        Fracao::Create([
            "fracao_estado_id" => 1,
            "bloco_id" => 3,
            "area" => 23,
            "user_id" => 2,
            "nome" => "BB"
        ]);

        Fracao::Create([
            "fracao_estado_id" => 2,
            "bloco_id" => 3,
            "area" => 27,
            "nome" => "CC"
        ]);

        Fracao::Create([
            "fracao_estado_id" => 1,
            "bloco_id" => 3,
            "area" => 27,
            "user_id" => 3,
            "nome" => "DD"
        ]);


        Fracao::Create([
            "fracao_estado_id" => 1,
            "bloco_id" => 3,
            "area" => 23,
            "user_id" => 1,
            "nome" => "EE"
        ]);
    }
}
