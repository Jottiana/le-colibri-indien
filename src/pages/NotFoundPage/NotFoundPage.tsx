import "./NotFoundPage.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { translations } from "../../data/translations";
import { Link } from "react-router-dom";
import backgroundPageNotFound from "/assets/404-page-not-found.jpg";

function NotFoundPage() {
  const { language } = useGlobalContext();
  const t = translations[language].notFoundPage;

  return (
    <div className="not-found-container">
      <img
        src={backgroundPageNotFound}
        alt={t.alt404}
        className="not-found-image"
      />
      <div className="not-found-page-overlay">
        <h1 className="not-found-text">
          {t.pageNotFound.split("\n").map((line: string, i: number) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <Link to="/" className="back-to-home-button">
          {t.backToHome}
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
