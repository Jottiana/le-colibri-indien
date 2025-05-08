import "./AboutUs.css";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import foundersImg from "/assets/founders-association.jpg";
import founder1 from "/assets/LH-founder-1.jpg";
import founder2 from "/assets/SK-founder-2.jpg";
import goalsImg from "/assets/Laetitia-Shubham-children-1.jpg";
import missionsImg from "/assets/Laetitia-Shubham-children-4.jpg";

function AboutUs() {
	const { language } = useGlobalContext();
	const t = translations[language].story;
	const [activeFounder, setActiveFounder] = useState<number | null>(null);

	const toggleFounder = (index: number) => {
		setActiveFounder(index === activeFounder ? null : index);
	};

	return (
		<section className="about-container">
			<h1 className="page-title">{t.pageTitle}</h1>

			<div className="grid-row">
				<div className="col-text">
					<h2 className="col-title">{t.historyTitle}</h2>
					{t.historyText.split("\n").map((line, i) => (
						<p key={i} className="paragraph">{line.trim()}</p>
					))}
				</div>
				<div className="col-image">
					<img src={foundersImg} alt={t.alt.history} />
				</div>
			</div>

			<div className="grid-row">
				<div className="col-image double-image">
					<img
						src={founder1}
						alt={t.alt.founder1}
						className={activeFounder === 0 ? "active" : ""}
						onClick={() => toggleFounder(0)}
					/>
					<img
						src={founder2}
						alt={t.alt.founder2}
						className={activeFounder === 1 ? "active" : ""}
						onClick={() => toggleFounder(1)}
					/>
				</div>
				<div className="col-text">
					<h2 className="col-title">{t.teamTitle}</h2>
					{activeFounder === null ? (
						<p className="paragraph">{t.ourTeam}</p>
					) : (
						<div className="bio">
							<h3>{t.teamMembers[activeFounder].name}</h3>
							<p className="paragraph">{t.teamMembers[activeFounder].full}</p>
						</div>
					)}
				</div>
			</div>

			<div className="grid-row">
				<div className="col-text">
					<h2 className="col-title">{t.goalsTitle}</h2>
					{t.goalsText.split("\n").map((line, i) => (
						<p key={i} className="paragraph">{line.trim()}</p>
					))}
				</div>
				<div className="col-image">
					<img src={goalsImg} alt={t.alt.goals} />
				</div>
			</div>

			<div className="grid-row reverse">
				<div className="col-text">
					<h2 className="col-title">{t.missionsTitle}</h2>
					{t.missionsText.split("\n").map((line, i) => (
						<p key={i} className="paragraph">{line.trim()}</p>
					))}
				</div>
				<div className="col-image">
					<img src={missionsImg} alt={t.alt.missions} />
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
