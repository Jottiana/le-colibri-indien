import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Valentine.css";

type Remaining = {
	totalMs: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

function getRemaining(targetMs: number): Remaining {
	const now = Date.now();
	const totalMs = Math.max(0, targetMs - now);

	const totalSeconds = Math.floor(totalMs / 1000);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return { totalMs, days, hours, minutes, seconds };
}

export default function Valentine() {
	const navigate = useNavigate();

	const targetMs = useMemo(() => Date.parse("2026-02-14T05:00:00.000Z"), []);

	const [remaining, setRemaining] = useState<Remaining>(() =>
		getRemaining(targetMs),
	);

	useEffect(() => {
		if (Date.now() >= targetMs) {
			navigate("/valentine/revealed", { replace: true });
		}
	}, [navigate, targetMs]);

	useEffect(() => {
		const id = window.setInterval(() => {
			const next = getRemaining(targetMs);
			setRemaining(next);

			if (next.totalMs === 0) {
				navigate("/valentine/revealed", { replace: true });
			}
		}, 250);

		return () => window.clearInterval(id);
	}, [navigate, targetMs]);

	return (
		<div className="valentinePage">
			<div className="valentineCard">
				<h1 className="valTitle">Encore un peu de patience… 💗</h1>
				<p className="valSub">Rendez-vous le 14 février 2026 à 06:00 (heure de Bruxelles).</p>

				<div className="countdown" aria-label="Countdown">
					<div className="unit">
						<div className="num">{remaining.days}</div>
						<div className="label">jours</div>
					</div>

					<div className="unit">
						<div className="num">{String(remaining.hours).padStart(2, "0")}</div>
						<div className="label">heures</div>
					</div>

					<div className="unit">
						<div className="num">{String(remaining.minutes).padStart(2, "0")}</div>
						<div className="label">min</div>
					</div>

					<div className="unit">
						<div className="num">{String(remaining.seconds).padStart(2, "0")}</div>
						<div className="label">sec</div>
					</div>
				</div>

				<p className="tiny">💘 À très vite…</p>
			</div>
		</div>
	);
}
