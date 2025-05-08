import "./Event.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import galaImage from "/assets/event-gala.png";
import galaImageMobile from "/assets/event-gala-mobile.png";
import locationIcon from "/assets/location-icon.svg";

function Event() {
	const { language } = useGlobalContext();
	const t = translations[language].galaEvent;

	const isMobile = window.innerWidth < 768;

	return (
		<div className="event">
			<div className="event-hero">
				<img
					src={isMobile ? galaImageMobile : galaImage}
					alt={t.alt}
					className="event-image"
				/>

				<div className="event-overlay">
					<h1 className="event-title">
						{t.h1.split("\n").map((line: string, i: number) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</h1>

					<div className="event-info-box">
						<p className="event-address">
							{t.locationBox.split("\n").map((line: string, i: number) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>
						<a
							href={t.mapsLink}
							target="_blank"
							rel="noopener noreferrer"
							className="event-maps-itinerary"
						>
							<img src={locationIcon} alt={t.altLocationIcon} className="location-icon"/> {t.itineraryLinkText}
						</a>
					</div>
				</div>
			</div>

			<section className="event-content">
				<p className="event-intro">{t.intro}</p>
				<p className="event-project">{t.project}</p>

				<div className="event-details">
					<p>{t.date}</p>
					<p>
						<a
							href={t.mapsLink}
							target="_blank"
							rel="noopener noreferrer"
							className="event-maps-link"
						>
							{t.location}
						</a>
					</p>
					<p className="event-note">{t.note}</p>
				</div>

				<div className="event-cta">
					<p>{t.cta}</p>
					<a
						href="https://www.helloasso.com/associations/association-le-colibri-indien/evenements/billetterie-gala-de-charite"
						target="_blank"
						rel="noopener noreferrer"
						className="event-register-link"
					>
						{t.inscriptionLinkText}
					</a>
				</div>
			</section>
		</div>
	);
}

export default Event;
