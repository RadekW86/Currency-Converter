import "./style.css";
import envelope from "../envelope.png";

const Footer = () => (
  <footer className="footer">
    <div>© 2023 - copyright Radosław Włodarski</div>
    <a href="mailto:wlodarski.radek@gmail.com">
      <img
        className="footer__icon"
        width="40"
        height="24"
        src={envelope}
        alt="mail_me"
      />
    </a>
  </footer>
);

export default Footer;
