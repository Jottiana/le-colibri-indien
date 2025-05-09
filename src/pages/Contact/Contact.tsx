import "./Contact.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import { teamMembers } from "../../data/teamData";
import ContactCard from "../../components/ContactCard/ContactCard";

function Contact() {
	const { language } = useGlobalContext();
	const t = translations[language].contact;

	return (
		<div className="contact-page">
			<h1>{t.title}</h1>
			<p>{t.content}</p>

			{teamMembers.map((member) => (
				<ContactCard
					key={member.id}
					id={member.id}
					name={member.name}
					photoSrc={member.photoSrc}
					phone={member.phone}
					emailLocal={member.emailLocal}
					emailDomain={member.emailDomain}
					t={t}
				/>
			))}
		</div>
	);
}

export default Contact;
