import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Le Colibri Indien</p>
        <div className="footer-links">
          <a
            href="https://www.facebook.com/profile.php?id=61574921468907"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
            </a>
          <a
            href="https://www.helloasso.com/associations/association-le-colibri-indien"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            HelloAsso
          </a>
          <a
            href="https://www.instagram.com/le_colibri_indien/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
