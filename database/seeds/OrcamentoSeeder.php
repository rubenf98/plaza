<?php

use App\Arquivo;
use Illuminate\Database\Seeder;

class OrcamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Arquivo::Create([
            "arquivo_tipo_id" => 1,
            "nome" => "Orçamento Setembro 2020 a Agosto 2021",
            "url" => "/arquivo/orcamento.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 1,
            "nome" => "Orçamento Setembro 2019 a Agosto 2020",
            "url" => "/arquivo/orcamento.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 1,
            "nome" => "Orçamento Setembro 2018 a Agosto 2019",
            "url" => "/arquivo/orcamento.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 1,
            "nome" => "Orçamento Setembro 2017 a Agosto 2018",
            "url" => "/arquivo/orcamento.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 2,
            "nome" => "Assembleia Agosto 2021",
            "url" => "/arquivo/assembleia.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 2,
            "nome" => "Assembleia Agosto 2020",
            "url" => "/arquivo/assembleia.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 2,
            "nome" => "Assembleia Agosto 2019",
            "url" => "/arquivo/assembleia.pdf"
        ]);

        Arquivo::Create([
            "arquivo_tipo_id" => 2,
            "nome" => "Assembleia Agosto 2018",
            "url" => "/arquivo/assembleia.pdf"
        ]);
    }
}
