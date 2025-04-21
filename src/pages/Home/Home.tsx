import "./Home.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import heroImage from "/assets/kids-celebrating-indian-republic-day-light-2.jpg";
import childImage from "/assets/woman-teaching-classroom.jpg";

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
							href="https://www.kisskissbankbank.com/"
							className="hero-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t.donate}
						</a>
						<a
							href="https://www.helloasso.com/"
							className="hero-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t.join}
						</a>
					</div>
				</div>
			</div>
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
					<img
						src={childImage}
						alt="Fille à l'école levant la main"
						className="about-image"
					/>
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

