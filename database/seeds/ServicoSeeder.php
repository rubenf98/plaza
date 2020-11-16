<?php

use App\Servico;
use Illuminate\Database\Seeder;

class ServicoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'servico_tipo_id' => 1],
            ['name' => 'Execução das deliberações tomadas em assembleia de condóminos', 'servico_tipo_id' => 1],
            ['name' => 'Redação de atas', 'servico_tipo_id' => 1],
            ['name' => 'Elaboração da minuta da procuração para representação em assembleia de condóminos', 'servico_tipo_id' => 1],
            ['name' => 'Representação do condomínio perante as autoridades administrativas e judiciais', 'servico_tipo_id' => 1],

            ['name' => 'Pedido de contadores de água e eletricidade em name do condomínio', 'servico_tipo_id' => 2],
            ['name' => 'Celebração dos contratos com as empresas ou pessoas prestadoras de serviços ao condomínio', 'servico_tipo_id' => 2],
            ['name' => 'Controlo dos serviços contratados', 'servico_tipo_id' => 2],
            ['name' => 'Preenchimento e entrega das declarações para a segurança social referentes a trabalhadores afetos ao condomínio', 'servico_tipo_id' => 2],

            ['name' => 'Abertura e manutenção das contas bancárias à ordem e poupança condomínio', 'servico_tipo_id' => 3],
            ['name' => 'Elaboração do orçamento anual, balancetes e mapas de pagamento de quotas', 'servico_tipo_id' => 3],
            ['name' => 'Liquidação das despesas do condomínio', 'servico_tipo_id' => 3],
            ['name' => 'Apresentação de orçamentos necessários para realizar as operações e outros atos necessários à conservação dos bens comuns', 'servico_tipo_id' => 3],
            ['name' => 'Emissão de Aviso/Recibo para cobrança de quotas e quotas em atraso', 'servico_tipo_id' => 3],

            ['name' => 'Vistoria regular às instalações do condomínio', 'servico_tipo_id' => 4],
            ['name' => 'Zelo pelo cumprimento das regras de segurança', 'servico_tipo_id' => 4],
            ['name' => 'Verificação dos prazos de inspeção dos elevadores pela entidade competente', 'servico_tipo_id' => 4],
            ['name' => 'Zelo pelo cumprimento dos prazos de inspeção às canalizações de gás legalmente exigidas', 'servico_tipo_id' => 4],

            ['name' => 'Acesso à informação financeira e contabilística do seu condomínio através do nosso website', 'servico_tipo_id' => 5],
            ['name' => 'Informação online sempre atualizada', 'servico_tipo_id' => 5],
            ['name' => 'Possibilidade de comunicar por e-mail a existência de alguma anomalia ou pedido de informação', 'servico_tipo_id' => 5],
            ['name' => 'Manutenção dos sistemas digitais', 'servico_tipo_id' => 5],

            ['name' => 'Esclarecimento de dúvidas sobre a administração das partes comuns', 'servico_tipo_id' => 6],
            ['name' => 'Secção de perguntas e respostas mais frequentes sobre o condomínio na página da Internet', 'servico_tipo_id' => 6],
            ['name' => 'Mediação de conflitos referentes às partes comuns', 'servico_tipo_id' => 6],
        ];

        foreach ($items as $item) {
            Servico::create($item);
        }
    }
}
