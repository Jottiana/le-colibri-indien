import "./AboutUs.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import founder1 from "/assets/LH-founder-1.jpg";
import founder2 from "/assets/SK-founder-2.jpg";
import colibri from "/assets/colibri.jpg";

function AboutUs() {
	const { language } = useGlobalContext();
	const t = translations[language].story;

	return (
		<section className="story">
			<div className="founders-photos">
				<img src={founder1} alt="Laëtitia Hornut" className="founder-photo" />
				<img src={founder2} alt="Shubham Kumar" className="founder-photo" />
			</div>

			<article className="story-content">
				{t.fullText.split("\n").map((line, i) => (
					<p key={i}>{line.trim()}</p>
				))}

				<h2 className="about-us-section">{t.legend}</h2>
				{t.legendText.split("\n").map((line, i) => (
					<p key={`goal-${i}`}>{line.trim()}</p>
				))}

				<h2 className="about-us-section">{t.goals}</h2>
				{t.goalsText.split("\n").map((line, i) => (
					<p key={`goal-${i}`}>{line.trim()}</p>
				))}

				<h2 className="about-us-section">{t.missions}</h2>
				{t.missionsText.split("\n").map((line, i) => (
					<p key={`mission-${i}`}>{line.trim()}</p>
				))}
			</article>

			<div className="colibri-section">
				<img src={colibri} alt="Colibri" className="colibri-photo" />
			</div>
		</section>
	);
}

export default AboutUs;
