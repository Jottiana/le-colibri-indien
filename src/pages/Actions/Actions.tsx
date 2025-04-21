import "./Actions.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";

export default function Actions() {
	const { language } = useGlobalContext();
	const t = translations[language].actions;

	return (
		<section className="actions-container">
			<h1 className="section-title">{t.title}</h1>
			<div className="action-description">
				{t.description.split("\n").map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>

			<div className="action-event">
				<h2 className="action-event-title">{t.upcomingEventTitle}</h2>
				<h3 className="action-event-name">{t.galaTitle}</h3>
				<p className="action-event-description">{t.galaDescription}</p>

				<p className="action-event-details">
					{t.galaDetailsParts.beforeDate}{" "}
					<strong>{t.galaDetailsParts.date}</strong>{" "}
					{t.galaDetailsParts.afterDate}{" "}
					<a
						href={t.galaDetailsParts.mapsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="action-maps-link"
					>
						{t.galaDetailsParts.address}
					</a>
				</p>

				<p className="action-invitation-note">{t.invitationNote}</p>
			</div>
		</section>
	);
}
