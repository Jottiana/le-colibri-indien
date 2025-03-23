export type Language = "fr" | "en";

export const translations = {
	home: {
		h1: {
			fr: "Offrons-leur une école, \ndonnons-leur un avenir",
			en: "Give them a school, \ngift them a future",
		},
		p: {
			fr: "Parce que chaque enfant mérite une chance",
			en: "Because every child deserves a chance",
		},
		alt: {
			fr: "Des enfants indiens",
			en: "Indian children",
		},
		intro: {
			fr: "L’association Le Colibri Indien a pour premier objectif \nla construction d’une école pour les enfants défavorisés \ndans le village Ilara dans l’État du Bihar en Inde.",
			en: "The association Le Colibri Indien aims to build a school \nfor underprivileged children in the village of Ilara, Bihar, India.",
		},
		quote: {
			fr: "« L’océan, c’est une multitude de gouttes d’eau » Jaya",
			en: "“The ocean is a multitude of drops of water” - Jaya",
		},
		aboutTitle: {
			fr: "Nos buts",
			en: "Our purpose",
		},
		aboutContent: {
			fr: "• Aider les enfants défavorisés en Inde à accéder à l’éducation en soutenant leur scolarisation via des collaborations avec une ou plusieurs associations locales d'aide à la scolarité.\n• Promouvoir, soutenir, accompagner et aider l'insertion des femmes dans le monde du travail, tout en œuvrant pour plus d'équité pour elles.\n• Financer et soutenir divers projets humanitaires, écologiques et économiques afin d'améliorer les conditions de vie en Inde.",
			en: "• Help underprivileged children in India access education through partnerships with local education support groups.\n• Promote, support, and accompany women's integration into the workforce while advocating for greater equity.\n• Fund and support humanitarian, ecological, and economic projects to improve living conditions in India.",
		},
	},
	aboutus: {
		title: {
			fr: "Notre Histoire",
			en: "Our Story",
		},
		content: {
			fr: "L'association a été fondée en 2023 pour venir en aide...",
			en: "The association was founded in 2023 to help...",
		},
	},
	actions: {
		title: {
			fr: "Nos Actions",
			en: "Our Actions",
		},
		content: {
			fr: "Un gala pour construire une école en Inde",
			en: "A gala to build a school in India",
		},
	},
	contact: {
		title: {
			fr: "Contactez-nous",
			en: "Contact us",
		},
		content: {
			fr: "Voici nos coordonnées",
			en: "Here are our contact details",
		},
	},
	navbar: {
		home: { fr: "Accueil", en: "Home" },
		story: { fr: "Histoire", en: "Story" },
		actions: { fr: "Actions", en: "Projects" },
		contact: { fr: "Contact", en: "Contact" },
	},
} as const;

export type TranslationKeys = typeof translations;
