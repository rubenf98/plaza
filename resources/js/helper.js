
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

export function isParameterNull(param, response = "Campo não preenchido") {
	if (param) return param
	else return response
};