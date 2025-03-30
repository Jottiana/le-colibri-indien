import "./Contact.css"
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";

function Contact() {
	const { language } = useGlobalContext();
	const t = translations[language].contact;

	return (
		<div className="contact-page">
			<h1>{t.title}</h1>
			<p>{t.content}</p>
		</div>
	);
}

export default Contact;
