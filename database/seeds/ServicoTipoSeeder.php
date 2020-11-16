<?php

use App\ServicoTipo;
use Illuminate\Database\Seeder;

class ServicoTipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                'name' => 'Administrativos',
                'image' => '/icon/servicos/administracao.svg',
            ],
            [
                'name' => 'Contratação de Serviços',
                'image' => '/icon/servicos/servicos.svg',
            ],
            [
                'name' => 'Financeiros e Contabilisticos',
                'image' => '/icon/servicos/financas.svg',
            ],
            [
                'name' => 'Segurança',
                'image' => '/icon/servicos/seguranca.svg',
            ],
            [
                'name' => 'Informáticos',
                'image' => '/icon/servicos/informaticos.svg',
            ],
            [
                'name' => 'Apoio',
                'image' => '/icon/servicos/apoio.svg',
            ],
        ];

        foreach ($items as $item) {
            ServicoTipo::create($item);
        }
    }
}
