import { useState } from "react";

interface ContactCardProps {
	id: string;
	name: string;
	photoSrc: string;
	phone: string;
	emailLocal: string;
	emailDomain: string;
	t: {
		showPhone: string;
		showEmail: string;
	};
}

function ContactCard({
	id,
	name,
	photoSrc,
	phone,
	emailLocal,
	emailDomain,
	t,
}: ContactCardProps) {
	const [showPhone, setShowPhone] = useState(false);
	const [showEmail, setShowEmail] = useState(false);

	const handleMailClick = () => {
		window.location.href = `mailto:${emailLocal}@${emailDomain}`;
	};

	return (
		<section className="contact-person" aria-labelledby={`${id}-label`}>
			<img
				src={photoSrc}
				alt={`Portrait de ${name}`}
				className="contact-photo"
			/>
			<div className="contact-info">
				<h2 id={`${id}-label`} className="visually-hidden">
					{name}
				</h2>

				<button
					type="button"
					onClick={() => setShowPhone(!showPhone)}
					className="custom-button"
					aria-expanded={showPhone}
					aria-controls={`${id}-phone`}
				>
					{showPhone ? (
						<a href={`tel:${phone.replace(/\s+/g, "")}`} className="phone-link">
							{phone}
						</a>
					) : (
						t.showPhone
					)}
				</button>

				<div id={`${id}-phone`} aria-hidden={!showPhone} />

				{showEmail ? (
					<button
						type="button"
						className="custom-button"
						onClick={handleMailClick}
					>
						{`${emailLocal}@${emailDomain}`}
					</button>
				) : (
					<button
						type="button"
						onClick={() => setShowEmail(true)}
						className="custom-button"
						aria-expanded={showEmail}
					>
						{t.showEmail}
					</button>
				)}
			</div>
		</section>
	);
}

export default ContactCard;
