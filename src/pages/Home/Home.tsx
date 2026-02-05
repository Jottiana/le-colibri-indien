import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const responsesByCategory = {
	yes: {
		names: ["Benjamin", "Ben", "Sweetie", "Titan", "Carcasse"],
		response: "Great! 🤩 Allons-y ! 💘 \n",
	},
} as const;

const getResponse = (name: string): string => {
	if (
		!/^[A-ZÀ-ÖØ-Ÿ][a-zà-öø-ÿ]+(?:[- ][A-ZÀ-ÖØ-Ÿ][a-zà-öø-ÿ]+)*$/.test(name)
	) {
		return "Hmm... Isn't that a real name? 😅 \n With a capital letter and more letters, perhaps?";
	}

	for (const category of Object.keys(responsesByCategory) as Array<
		keyof typeof responsesByCategory
	>) {
		if (responsesByCategory[category].names.includes(name)) {
			return responsesByCategory[category].response;
		}
	}

	return "Let's get to know each other first 😊 \n Tell me why you want to be my Valentine";
};

type Heart = {
	id: number;
	x: number;
	y: number;
	size: number;
	speed: number;
	color: string;
};

const Home = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [submittedName, setSubmittedName] = useState<string | null>(null);
	const [response, setResponse] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
	const [hearts, setHearts] = useState<Heart[]>([]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			createHearts(e);
		}
	};

	const moveNoButton = () => {
		const maxX = window.innerWidth < 768 ? 60 : 160;
		const maxY = window.innerWidth < 768 ? 60 : 160;
		const newX = Math.random() * (maxX * 2) - maxX;
		const newY = Math.random() * (maxY * 2) - maxY;
		setNoPosition({ x: newX, y: newY });
	};

	const createHearts = (
		_event:
			| React.MouseEvent<HTMLButtonElement>
			| React.KeyboardEvent<HTMLInputElement>,
	) => {
		const trimmedName = name.trim();

		if (trimmedName === "") {
			setError("Please enter a first name!");
			return;
		}

		setError(null);
		setSubmittedName(trimmedName);
		setResponse(getResponse(trimmedName));

		const yesButton = document.querySelector(
			'[data-role="yes-button"]',
		) as HTMLButtonElement | null;

		const buttonRect = yesButton?.getBoundingClientRect();
		if (!buttonRect) return;

		const btnX = buttonRect.left + buttonRect.width / 2;
		const btnY = buttonRect.top;

		const colors = ["#ff4d6d", "#ff85a1", "#ffadc8", "#c75fff"];

		const newHearts: Heart[] = Array.from({ length: 15 }).map((_, index) => ({
			id: Date.now() + index,
			x: btnX + (Math.random() * 120 - 60),
			y: btnY + (Math.random() * 50 - 25),
			size: Math.random() * 15 + 20,
			speed: Math.random() * 2 + 1.5,
			color: colors[Math.floor(Math.random() * colors.length)],
		}));

		setHearts((prev) => [...prev, ...newHearts]);

		setTimeout(() => {
			setHearts((prev) => prev.slice(15));
		}, 2000);
	};

	const handleResponseClick = () => {
		// Navigation vers la page suivante seulement si on a bien une réponse affichée
		if (!submittedName || !response) return;
		navigate("/valentine");
	};

	return (
		<div className="home-page">
			<div className="heartsLayer" aria-hidden="true">
				{hearts.map((heart) => (
					<div
						key={heart.id}
						className="heart"
						style={{
							left: `${heart.x}px`,
							top: `${heart.y}px`,
							backgroundColor: heart.color,
							["--size" as unknown as string]: `${heart.size}px`,
							["--speed" as unknown as string]: `${heart.speed}s`,
						}}
					/>
				))}
			</div>

			<div className="card">
				<h1 className="title">Veux-tu être mon Valentin une fois ? 💖</h1>

				<label htmlFor="name-input" className="srOnly">
					Enter your first name
				</label>

				<input
					id="name-input"
					type="text"
					placeholder="Ton prénom ici..."
					value={name}
					onChange={(e) => {
						if (e.target.value.startsWith(" ")) return;
						setName(e.target.value);
					}}
					onKeyDown={handleKeyDown}
					className="nameInput"
				/>

				{submittedName && response && (
					<button
						type="button"
						className="response responseLink"
						onClick={handleResponseClick}
						aria-label="Open the next page"
					>
						{response}
						<span className="responseHint">Clique pour continuer ✨</span>
					</button>
				)}

				{error && <p className="error">{error}</p>}

				<div className="buttons">
					<button
						type="button"
						onClick={createHearts}
						className="yesButton"
						aria-label="Yes, I accept"
						data-role="yes-button"
					>
						Yes 💘
					</button>

					<button
						type="button"
						className="noButton"
						onMouseEnter={moveNoButton}
						onFocus={moveNoButton}
						aria-label="No, I refuse"
						style={{
							transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
						}}
					>
						No 💔
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
