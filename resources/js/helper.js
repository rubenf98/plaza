export const colorConverter = {
	"pendente": "wheat",
	"pago": "green",
	"divida": "red",
	"plano": "orange",
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
