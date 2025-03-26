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
	fr: {
		actions: {
			title: "Nos actions en cours",
			description:
				"Notre première action vise la construction d’une école publique associative, à but non lucratif, dans le village d’Ilara, situé près de Bodhgaya.\n\nCe projet ambitieux a pour objectif de garantir un accès libre et gratuit à l’éducation pour les enfants de cette région, où les opportunités scolaires sont encore trop rares. En leur offrant un cadre d’apprentissage de qualité, nous souhaitons leur permettre de développer pleinement leur potentiel et de poursuivre le métier de leurs rêves.\n\nEn supprimant les barrières financières à l’éducation, nous donnons à chaque enfant une chance équitable de construire son avenir. Cette démarche ne bénéficie pas uniquement à l’élève : elle a aussi le pouvoir de transformer durablement la vie de familles entières, en leur ouvrant de nouvelles perspectives et en contribuant à briser le cycle de la pauvreté.",
			upcomingEventTitle: "Évènement à venir",
			galaTitle: "Gala de charité",
			galaDescription:
				"Dans le but de présenter officiellement notre association et de sensibiliser le public à nos actions, nous organisons un Gala de Charité exceptionnel.\n\nCet évènement a également pour vocation de réunir les fonds nécessaires à la concrétisation de notre premier projet : la construction d’une école associative dans le village d’Ilara, en Inde.",
			galaDetailsParts: {
				beforeDate: "Le Gala aura lieu le",
				date: "31 mai 2025",
				afterDate: "à la salle Chorus by Hôtel Leprince,",
				address: "33 Square place de la République, 72000 Le Mans, France",
				mapsLink:
					"https://maps.google.com/?q=Chorus+by+Hotel+Leprince,+Le+Mans",
			},

			invitationNote:
				"L’évènement est accessible uniquement sur invitation, le nombre de places étant limité à 100 participant·e·s.",
		},
	},
	en: {
		actions: {
			title: "Our current actions",
			description:
				"Our first initiative is the construction of a public, non-profit school in the village of Ilara, near Bodhgaya.\n\nThis ambitious project aims to provide free and open access to education for children in the region, where educational opportunities remain limited. By offering them a high-quality learning environment, we hope to help each child reach their full potential and pursue the career of their dreams.\n\nBy removing financial barriers to education, we offer every child a fair chance to shape their future. This initiative not only benefits the student — it also has the power to transform entire families by opening up new perspectives and helping to break the cycle of poverty.",
			upcomingEventTitle: "Upcoming Event",
			galaTitle: "Charity Gala",
			galaDescription:
				"To officially introduce our association and its mission, and to raise funds for our first goal, we are pleased to organize a Charity Gala",
			galaDetailsParts: {
				beforeDate: "The gala will take place on",
				date: "May 31, 2025",
				afterDate: "at the Chorus Hall by Hôtel Leprince,",
				address: "33 Square place de la République, 72000 Le Mans, France",
				mapsLink:
					"https://maps.google.com/?q=Chorus+by+Hotel+Leprince,+Le+Mans",
			},
			invitationNote:
				"This event is by invitation only, as attendance is limited to 100 guests.",
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
