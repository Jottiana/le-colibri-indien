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

			<div className="event">
				<h2 className="event-title">{t.upcomingEventTitle}</h2>
				<h3 className="event-name">{t.galaTitle}</h3>
				<p className="event-description">{t.galaDescription}</p>

				<p className="event-details">
					{t.galaDetailsParts.beforeDate}{" "}
					<strong>{t.galaDetailsParts.date}</strong>{" "}
					{t.galaDetailsParts.afterDate}{" "}
					<a
						href={t.galaDetailsParts.mapsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="maps-link"
					>
						{t.galaDetailsParts.address}
					</a>
				</p>

				<p className="invitation-note">{t.invitationNote}</p>
			</div>
		</section>
	);
}
