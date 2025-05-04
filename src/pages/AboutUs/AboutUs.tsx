import "./AboutUs.css";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import foundersImg from "/assets/founders-association.jpg";
import founder1 from "/assets/LH-founder-1.jpg";
import founder2 from "/assets/SK-founder-2.jpg";
import goalsImg from "/assets/goals-association.png";
import missionsImg from "/assets/missions-association.png";

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
					<h2>{t.historyTitle}</h2>
					{t.historyText.split("\n").map((line, i) => (
						<p key={i}>{line.trim()}</p>
					))}
				</div>
				<div className="col-image">
					<img src={foundersImg} alt="Notre histoire" />
				</div>
			</div>

			<div className="grid-row">
				<div className="col-image double-image">
					<img
						src={founder1}
						alt="Laëtitia"
						className={activeFounder === 0 ? "active" : ""}
						onClick={() => toggleFounder(0)}
					/>
					<img
						src={founder2}
						alt="Shubham"
						className={activeFounder === 1 ? "active" : ""}
						onClick={() => toggleFounder(1)}
					/>
				</div>
				<div className="col-text">
					<h2>{t.teamTitle}</h2>
					{t.teamMembers.map((m, i) =>
						activeFounder === i ? (
							<div key={i} className="bio">
								<h3>{m.name}</h3>
								<p>{m.full}</p>
							</div>
						) : null,
					)}
					{activeFounder === null && (
						<p>👉 Clique sur une photo pour en savoir plus.</p>
					)}
				</div>
			</div>

			<div className="grid-row">
				<div className="col-text">
					<h2>{t.goalsTitle}</h2>
					{t.goalsText.split("\n").map((line, i) => (
						<p key={i}>{line.trim()}</p>
					))}
				</div>
				<div className="col-image">
					<img src={goalsImg} alt="Nos objectifs" />
				</div>
			</div>

			<div className="grid-row reverse">
				<div className="col-text">
					<h2>{t.missionsTitle}</h2>
					{t.missionsText.split("\n").map((line, i) => (
						<p key={i}>{line.trim()}</p>
					))}
				</div>
				<div className="col-image">
					<img src={missionsImg} alt="Nos missions" />
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
