import "./Footer.css";
import colibriLogo from "/assets/colibri-logo.png";
import facebookLogo from "/assets/facebook-icon.svg";
import helloassoLogo from "/assets/helloasso-icon.svg";
import instagramLogo from "/assets/instagram-icon.svg";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";

function Footer() {
	const { language } = useGlobalContext();
	const t = translations[language].footer;

	return (
		<footer className="footer">
			<div className="footer-top">
				<a
					href="/"
					className="footer-logo-wrapper"
					aria-label={t.aria.homeLink}
				>
					<img src={colibriLogo} alt={t.aria.logoAlt} className="footer-logo" />
				</a>
			</div>

			<div className="footer-columns">
				<nav className="footer-column" aria-label={t.aria.aboutSection}>
					<h3>{t.aboutTitle}</h3>
					<ul>
						<li>
							<a href="/aboutus">{t.aboutLinks.discover}</a>
						</li>
						<li>
							<a href="/actions">{t.aboutLinks.actions}</a>
						</li>
						<li>
							<a href="/contact">{t.aboutLinks.contact}</a>
						</li>
						<li>
							<a href="/event">{t.aboutLinks.news}</a>
						</li>
						<li>
							<a href="/legalnotice">{t.aboutLinks.legal}</a>
						</li>
					</ul>
				</nav>

				<nav className="footer-column" aria-label={t.aria.actSection}>
					<h3>{t.actTitle}</h3>
					<ul>
						<li>
							<a
								href="https://www.helloasso.com/associations/association-le-colibri-indien/formulaires/1"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t.actLinks.donate}
							</a>
						</li>
						<li>
							<a
								href="https://www.helloasso.com/associations/association-le-colibri-indien/adhesions/adhesion-le-colibri-indien"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t.actLinks.member}
							</a>
						</li>
						<li>
							<a
								href="https://www.helloasso.com/associations/association-le-colibri-indien/evenements/billetterie-gala-de-charite"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t.actLinks.gala}
							</a>
						</li>
					</ul>
				</nav>

				<nav className="footer-column" aria-label={t.aria.socialSection}>
					<h3>{t.socialTitle}</h3>
					<ul>
						<li>
							<a
								href="https://www.facebook.com/le.colibri.indien/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://www.helloasso.com/associations/association-le-colibri-indien"
								target="_blank"
								rel="noopener noreferrer"
							>
								HelloAsso
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/le_colibri_indien/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="footer-bottom">
				<p>© {new Date().getFullYear()} Le Colibri Indien</p>

				<div className="footer-social-icons">
					<a
						href="https://www.facebook.com/le.colibri.indien/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t.aria.facebook}
						title="Facebook"
					>
						<div className="social-icon-wrapper">
							<img src={facebookLogo} alt="Facebook" />
						</div>
					</a>
					<a
						href="https://www.helloasso.com/associations/association-le-colibri-indien"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t.aria.helloasso}
						title="HelloAsso"
					>
						<div className="social-icon-wrapper">
							<img src={helloassoLogo} alt="HelloAsso" />
						</div>
					</a>
					<a
						href="https://www.instagram.com/le_colibri_indien/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t.aria.instagram}
						title="Instagram"
					>
						<div className="social-icon-wrapper">
							<img src={instagramLogo} alt="Instagram" />
						</div>
					</a>
				</div>

				<p>
					<a
						href="https://github.com/jottiana"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.siteBy}
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
