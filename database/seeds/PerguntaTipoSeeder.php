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
            "name" => "Administração",
            "image" => "/icon/faq/administracao.svg",
        ]);

        PerguntaTipo::Create([
            "name" => "Condomínio",
            "image" => "/icon/faq/condominio.svg",
        ]);

        PerguntaTipo::Create([
            "name" => "Assembleias",
            "image" => "/icon/faq/assembleia.svg",
        ]);

        PerguntaTipo::Create([
            "name" => "Outras",
            "image" => "/icon/faq/other.svg",
        ]);
    }
}
