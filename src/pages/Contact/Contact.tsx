import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";

function Contact() {
	const { language } = useGlobalContext();
	const t = translations.contact;

	return (
		<div className="page">
			<h1>{t.title[language as "fr" | "en"]}</h1>
			<p>{t.content[language as "fr" | "en"]}</p>
		</div>
	);
}

export default Contact;
