<?php

use App\PerguntaTipo;
use Illuminate\Database\Seeder;

class PerguntaTipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PerguntaTipo::Create([
            "name" => "Pagamentos",
            "image" => "placeholder1",
        ]);

        PerguntaTipo::Create([
            "name" => "Administradores",
            "image" => "placeholder2",
        ]);

        PerguntaTipo::Create([
            "name" => "Arrendamento",
            "image" => "placeholder3",
        ]);

        PerguntaTipo::Create([
            "name" => "Assembleia",
            "image" => "placeholder4",
        ]);
    }
}
