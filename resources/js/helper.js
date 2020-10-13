
export const colorConverter = {
	"pendente": "wheat",
	"pago": "green",
	"divida": "red",
	"plano": "orange",
};

export function breakPoint(param) {
	return param < 992 && true;
};

export const faqCategories = ['pagamentos', 'administradores', 'arrendamento', 'assembleia'];

export const tagToIcon = {
	"obra": "/icon/circulares/repair.svg",
	"limpezas": "/icon/circulares/cleaning.svg",
	"aviso": "/icon/circulares/warning.svg",
	"manutenção": "/icon/circulares/repair.svg",
	"reunião": "/icon/circulares/meeting.svg",
	"outros": "/icon/circulares/other.svg",
};

export function isParameterNull(param, response = "Campo não preenchido") {
	if (param) return param
	else return response
};


export const servicoToIcon = {
	"Administrativos": "/icon/servicos/administracao.svg",
	"Contratação de Serviços": "/icon/servicos/servicos.svg",
	"Financeiros e Contabilisticos": "/icon/servicos/financas.svg",
	"Segurança": "/icon/servicos/seguranca.svg",
	"Informáticos": "/icon/servicos/informaticos.svg",
	"Apoio": "/icon/servicos/apoio.svg",
};


export const servicos = {
	'Administrativos': [
		'Elaboração de convocatórias e regulamento interno do condomínio',
		'Execução das deliberações tomadas em assembleia de condóminos',
		'Redação de atas',
		'Elaboração da minuta da procuração para representação em assembleia de condóminos',
		'Representação do condomínio perante as autoridades administrativas e judiciais',
	],
	'Contratação de Serviços': [
		'Pedido de contadores de água e eletricidade em nome do condomínio',
		'Celebração dos contratos com as empresas ou pessoas prestadoras de serviços ao condomínio',
		'Controlo dos serviços contratados',
		'Preenchimento e entrega das declarações para a segurança social referentes a trabalhadores afetos ao condomínio',
	],
	'Financeiros e Contabilisticos': [
		'Abertura e manutenção das contas bancárias à ordem e poupança condomínio',
		'Elaboração do orçamento anual, balancetes e mapas de pagamento de quotas',
		'Liquidação das despesas do condomínio',
		'Apresentação de orçamentos necessários para realizar as operações e outros atos necessários à conservação dos bens comuns',
		'Emissão de Aviso/Recibo para cobrança de quotas e quotas em atraso',
	],
	'Segurança': [
		'Vistoria mensal às instalações do condomínio',
		'Zelo pelo cumprimento das regras de segurança',
		'Verificação dos prazos de inspeção dos elevadores pela entidade competente',
		'Zelo pelo cumprimento dos prazos de inspeção às canalizações de gás legalmente exigidas',
	],
	'Informáticos': [
		'Acesso à informação financeira e contabilística do seu condomínio através do nosso website',
		'Informação online sempre atualizada',
		'Possibilidade de comunicar por e-mail a existência de alguma anomalia ou pedido de informação',
		'Manutenção dos sistemas digitais',
	],
	'Apoio': [
		'Esclarecimento de dúvidas sobre a administração das partes comuns',
		'Secção de perguntas e respostas mais frequentes sobre o condomínio na página da Internet',
		'Mediação de conflitos referentes às partes comuns'
	],
};