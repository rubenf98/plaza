<?php

use App\ArquivoTipo;
use Illuminate\Database\Seeder;

class ArquivoTipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ArquivoTipo::create([
            'nome' => 'orcamentos',
            'url' => '/icon/arquivo/orcamento.svg'
        ]);

        ArquivoTipo::create([
            'nome' => 'assembleias',
            'url' => '/icon/arquivo/assembleia.svg'
        ]);
    }
}
