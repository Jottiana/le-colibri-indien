import "./Home.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import heroImage from "/assets/kids-celebrating-indian-republic-day-light-2.jpg";
import childImage from "/assets/woman-teaching-classroom.jpg";
import donationIcon from "/assets/donation-icon.svg";
import galaIcon from "/assets/gala-icon.svg";
import membershipIcon from "/assets/membership-icon.svg";

function Home() {
	const { language } = useGlobalContext();
	const t = translations[language].home;

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

			<section className="orange-banner">
				<div className="orange-text">{t.nonProfit}</div>
				<div className="info-cards">
					<a
						href="https://www.helloasso.com/associations/association-le-colibri-indien/formulaires/1"
						className="info-card"
					>
						<img src={donationIcon} alt={t.card1Alt} className="card-icon" />
						<h3>{t.card1}</h3>
						<div className="card-text">{t.card1Text}</div>
					</a>

					<a
						href="https://www.helloasso.com/associations/association-le-colibri-indien/evenements/billetterie-gala-de-charite"
						className="info-card"
					>
						<img src={galaIcon} alt={t.card2Alt} className="card-icon" />
						<h3>{t.card2}</h3>
						<div className="card-text">{t.card2Text}</div>
					</a>

					<a
						href="https://www.helloasso.com/associations/association-le-colibri-indien/adhesions/adhesion-le-colibri-indien"
						className="info-card"
					>
						<img src={membershipIcon} alt={t.card3Alt} className="card-icon" />
						<h3>{t.card3}</h3>
						<div className="card-text">{t.card3Text}</div>
					</a>
				</div>
			</section>

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
						<h2 className="about-title-home">{t.aboutTitle}</h2>
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
