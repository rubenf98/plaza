<?php

use App\Orcamento;
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
        Orcamento::Create([
            "nome" => "Orçamento Setembro 2020 a Agosto 2021",
            "url" => "/orcamento/orcamento.pdf"
        ]);

        Orcamento::Create([
            "nome" => "Orçamento Setembro 2019 a Agosto 2020",
            "url" => "/orcamento/orcamento.pdf"
        ]);

        Orcamento::Create([
            "nome" => "Orçamento Setembro 2018 a Agosto 2019",
            "url" => "/orcamento/orcamento.pdf"
        ]);

        Orcamento::Create([
            "nome" => "Orçamento Setembro 2017 a Agosto 2018",
            "url" => "/orcamento/orcamento.pdf"
        ]);
    }
}
