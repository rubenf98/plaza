<?php

use App\Pergunta;
use Illuminate\Database\Seeder;

class PerguntaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['question' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 1],
            ['question' => 'Execução das deliberações tomadas em assembleia de condóminos', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 1],
            ['question' => 'Redação de atas', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 1],
            ['question' => 'Elaboração da minuta da procuração para representação em assembleia de condóminos', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 1],
            ['question' => 'Representação do condomínio perante as autoridades administrativas e judiciais', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 1],

            ['question' => 'Pedido de contadores de água e eletricidade em question do condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 2],
            ['question' => 'Celebração dos contratos com as empresas ou pessoas prestadoras de serviços ao condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 2],
            ['question' => 'Controlo dos serviços contratados', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 2],
            ['question' => 'Preenchimento e entrega das declarações para a segurança social referentes a trabalhadores afetos ao condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 2],

            ['question' => 'Abertura e manutenção das contas bancárias à ordem e poupança condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 3],
            ['question' => 'Elaboração do orçamento anual, balancetes e mapas de pagamento de quotas', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 3],
            ['question' => 'Liquidação das despesas do condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 3],
            ['question' => 'Apresentação de orçamentos necessários para realizar as operações e outros atos necessários à conservação dos bens comuns', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 3],
            ['question' => 'Emissão de Aviso/Recibo para cobrança de quotas e quotas em atraso', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 3],

            ['question' => 'Vistoria regular às instalações do condomínio', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 4],
            ['question' => 'Zelo pelo cumprimento das regras de segurança', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 4],
            ['question' => 'Verificação dos prazos de inspeção dos elevadores pela entidade competente', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 4],
            ['question' => 'Zelo pelo cumprimento dos prazos de inspeção às canalizações de gás legalmente exigidas', 'answer' => 'Elaboração de convocatórias e regulamento interno do condomínio', 'pergunta_tipo_id' => 4],
        ];

        foreach ($items as $item) {
            Pergunta::create($item);
        }
    }
}
