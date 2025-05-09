import "./LegalNotice.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";

function LegalNotice() {
	const { language } = useGlobalContext();
	const t = translations[language].legalNotice;

	return (
		<main className="legal-notice">
			<h1>{t.title}</h1>

			<section>
				<h2>{t.organizationTitle}</h2>
				<p>{t.organization}</p>
				<h2>{t.editorTitle}</h2>
				<p>
					{t.editorIntro}{" "}
					<a
						href="https://github.com/jottiana"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.github}
					</a>{" "}
					<a
						href="https://www.linkedin.com/in/agnes-mb/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.linkedin}
					</a>
				</p>
			</section>

			<section>
				<h2>{t.siteManagementTitle}</h2>
				<p>
					{t.siteManagement.split("\n").map((line, i) => (
						<span key={i}>
							{line}
							<br />
						</span>
					))}
				</p>
			</section>

			<section>
				<h2>{t.hostingTitle}</h2>
				<p>{t.hosting}</p>
			</section>

			<section>
				<h2>{t.creditsTitle}</h2>
				<p>
					{t.credits.split("\n").map((line, i) => (
						<span key={i}>
							{line}
							<br />
						</span>
					))}
				</p>
				<p>
					<a
						href="https://www.flaticon.com/fr/icones-gratuites/facebook"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.facebookFlaticonCredit}
					</a>
				</p>
				<p>
					<a
						href="https://www.flaticon.com/fr/icones-gratuites/instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.instagramFlaticonCredit}
					</a>
				</p>
				<p>
					<a
						href="https://fr.freepik.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.freepikCredit}
					</a>
				</p>
			</section>

			<section>
				<h2>{t.rightsTitle}</h2>
				<p>{t.rights}</p>
			</section>

			<section>
				<h2>{t.privacyTitle}</h2>
				<p>{t.privacy}</p>
			</section>
		</main>
	);
}

export default LegalNotice;
