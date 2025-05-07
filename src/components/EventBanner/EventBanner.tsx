import "./EventBanner.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";

function EventBanner() {
	const { language } = useGlobalContext();
	const t = translations[language].eventBanner;

	const [visible, setVisible] = useState(() => {
		return localStorage.getItem("eventBannerClosed") !== "true";
	});

	useEffect(() => {
		if (visible) {
			document.body.classList.add("banner-visible");
		} else {
			document.body.classList.remove("banner-visible");
		}
		return () => {
			document.body.classList.remove("banner-visible");
		};
	}, [visible]);

	if (!visible) {
		return null;
	}

	return (
		<div className="event-banner" role="region" aria-label="Annonce événement">
			<a href="/event" className="event-banner-text">
				{t.banner}
			</a>
			<button
				type="button"
				className="close-banner"
				onClick={() => {
					setVisible(false);
					localStorage.setItem("eventBannerClosed", "true");
				}}
				aria-label="Fermer l'annonce"
			>
				&times;
			</button>
		</div>
	);
}

export default EventBanner;
