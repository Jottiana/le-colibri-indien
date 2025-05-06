import "./Home.css";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import heroImage from "/assets/kids-celebrating-indian-republic-day-light-2.jpg";
import childImage from "/assets/woman-teaching-classroom.jpg";

function Home() {
	const { language } = useGlobalContext();
	const t = translations[language].home;
	const [showBanner, setShowBanner] = useState(true);

	return (
		<div className="home">
			<div className="hero-container">
				<img src={heroImage} alt={t.alt} className="hero-image" />
				<div className="hero-text">
					<h1>
						{t.h1.split("\n").map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</h1>

					<p>{t.p}</p>
					<div className="hero-buttons">
						<a
							href="https://www.helloasso.com/associations/association-le-colibri-indien/formulaires/1"
							className="hero-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t.donate}
						</a>
						<a
							href="https://www.helloasso.com/associations/association-le-colibri-indien/adhesions/adhesion-le-colibri-indien"
							className="hero-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t.join}
						</a>
					</div>
				</div>
			</div>

			{showBanner && (
				<div
					className="event-banner"
					role="region"
					aria-label="Annonce événement"
				>
					<a href="/event" className="event-banner-text">
						{t.banner}
					</a>
					<button
						type="button"
						className="close-banner"
						onClick={() => setShowBanner(false)}
						aria-label="Fermer l'annonce"
					>
						&times;
					</button>
				</div>
			)}

			<section className="home-intro">
				<p className="intro">
					{t.intro.split("\n").map((line, i) => (
						<span key={i}>
							{line}
							<br />
						</span>
					))}
				</p>

				<div className="quote-block">
					<div className="line" />
					<p className="quote">{t.quote}</p>
					<div className="line" />
				</div>

				<div className="about-section">
					<img src={childImage} alt="Ecole en Inde" className="about-image" />
					<div className="about-text">
						<h2>{t.aboutTitle}</h2>
						{t.aboutContent.split("\n").map((line, i) => (
							<p key={i}>{line}</p>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
