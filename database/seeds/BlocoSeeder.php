<?php

use Illuminate\Database\Seeder;
use App\Bloco;

class BlocoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Bloco::Create([
            "nome" => "A",
            "edificio_id" => 1,
        ]);

        Bloco::Create([
            "nome" => "B",
            "edificio_id" => 1,
        ]);

        Bloco::Create([
            "nome" => "C",
            "edificio_id" => 1,
        ]);
    }
}
