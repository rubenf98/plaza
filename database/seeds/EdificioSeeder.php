<?php

use Illuminate\Database\Seeder;
use App\Edificio;

class EdificioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Edificio::Create([
            "morada" => "Caminho Municipal Ti Clara",
            "nome" => "Plaza II"
        ]);
    }
}
