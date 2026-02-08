import "./NavBar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import colibriLogo from "/assets/colibri-logo.png"

function NavBar() {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const { language, toggleLanguage, theme, toggleTheme } = useGlobalContext();
	const t = translations[language].navbar;

	const links = [
		{ path: "/", label: t.home },
		// { path: "/event", label: t.event },
		{ path: "/aboutus", label: t.story },
		{ path: "/actions", label: t.actions },
		{ path: "/contact", label: t.contact },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav
			className={`navbar ${location.pathname === "/" ? "transparent" : "colored"}`}
		>
			<div className="nav-container">
				<Link to="/" className="logo" onClick={closeMenu}>
					<img
						src={colibriLogo}
						alt="Logo Le Colibri Indien"
						className="logo-img"
					/>
				</Link>

				<button type="button" className="burger" onClick={toggleMenu}>
					☰
				</button>
			</div>

			<ul className={`nav-links ${isOpen ? "open" : ""}`}>
				{links.map((link) => (
					<li
						key={link.path}
						className={location.pathname === link.path ? "active" : ""}
						onClick={closeMenu}
					>
						<Link to={link.path}>{link.label}</Link>
					</li>
				))}
				<li className="nav-icons">
					<button
						type="button"
						className="icon-button plain"
						onClick={toggleLanguage}
						aria-label={
							language === "fr" ? "Switch to English" : "Passer en français"
						}
						title={language === "fr" ? "EN" : "FR"}
					>
						{language === "fr" ? "🇬🇧" : "🇫🇷"}
					</button>

					<button
						type="button"
						className="icon-button plain"
						onClick={toggleTheme}
						aria-label={
							theme === "light"
								? "Activer le mode sombre"
								: "Activer le mode clair"
						}
						title={theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
					>
						{theme === "light" ? "🌙" : "☀️"}
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
