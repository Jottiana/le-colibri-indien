import "./Event.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import { Link } from "react-router-dom";
import galaImage from "/assets/event-gala.png";
import galaImageMobile from "/assets/event-gala-mobile.png";

function Event() {
	const { language } = useGlobalContext();
	const t = translations[language].event;

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
					<h1 className="event-title">{t.h1}</h1>

					<div className="event-date-box">
						<p className="event-date">{t.dateBox}</p>
					</div>

					<div className="event-info-box">
						<p className="event-info">
							{t.locationBox.split("\n").map((line, i) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>
					</div>

					{/* <a
						href="/calendar-invite.ics"
						className="calendar-button"
						download
					>
						{t.addToCalendar}
					</a> */}
				</div>
			</div>

			<section className="event-content">
				<p className="event-intro">{t.intro}</p>
				<p className="event-project">{t.project}</p>

				<div className="event-details">
					<p>{t.date}</p>
					<p>{t.location}</p>
					<p className="event-note">{t.note}</p>
				</div>

				<div className="event-cta">
					<p>{t.cta}</p>
					<Link to="/contact" className="event-contact-link">
						{t.contactLink}
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Event;
