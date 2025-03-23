import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { useState } from "react";

function NavBar() {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const { language, toggleLanguage, theme, toggleTheme } = useGlobalContext();

	const links = [
		{ path: "/", label: "Accueil" },
		{ path: "/aboutus", label: "Histoire" },
		{ path: "/actions", label: "Actions" },
		{ path: "/contact", label: "Contact" },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className="logo">Le Colibri Indien</div>

				<div className="nav-right">
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
					</ul>

					<div className="nav-actions">
						<button
							type="button"
							className="icon-button"
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
							className="icon-button"
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

						<button type="button" className="burger" onClick={toggleMenu}>
							☰
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
