import "./Home.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import heroImage from "/assets/kids-celebrating-indian-republic-day.jpg";
import childImage from "/assets/front-view-girls-holding-hands-up.jpg";
import { Link } from "react-router-dom";

function Home() {
	const { language } = useGlobalContext();
	const t = translations.home;

	return (
		<div className="home">
			<div className="hero-container">
				<img src={heroImage} alt={t.alt[language]} className="hero-image" />
				<div className="hero-text">
					<h1>
						{t.h1[language].split("\n").map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</h1>

					<p>{t.p[language]}</p>
					<div className="hero-buttons">
						<a
							href="https://www.kisskissbankbank.com/"
							className="hero-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							{language === "fr" ? "Faire un don" : "Donate"}
						</a>
						<Link to="/contact" className="hero-button">
							{language === "fr" ? "Devenir membre" : "Join us"}
						</Link>
					</div>
				</div>
			</div>
			<section className="home-intro">
				<p className="intro">
					{t.intro[language].split("\n").map((line, i) => (
						<span key={i}>
							{line}
							<br />
						</span>
					))}
				</p>

				<div className="quote-block">
					<div className="line" />
					<p className="quote">{t.quote[language]}</p>
					<div className="line" />
				</div>

				<div className="about-section">
					<img
						src={childImage}
						alt="Fille à l'école levant la main"
						className="about-image"
					/>
					<div className="about-text">
						<h2>{t.aboutTitle[language]}</h2>
						{t.aboutContent[language].split("\n").map((line, i) => (
							<p key={i}>{line}</p>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
