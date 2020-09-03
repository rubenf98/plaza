<?php

use App\CircularTag;
use Illuminate\Database\Seeder;

class CircularTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CircularTag::create([
            "nome" => "obra",
        ]);
        CircularTag::create([
            "nome" => "limpezas",
        ]);
        CircularTag::create([
            "nome" => "aviso",
        ]);
        CircularTag::create([
            "nome" => "manutenção",
        ]);
        CircularTag::create([
            "nome" => "reunião",
        ]);
        CircularTag::create([
            "nome" => "outros",
        ]);
    }
}
