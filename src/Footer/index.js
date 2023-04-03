import "./style.css";
import envelope from "../envelope.png";

const Footer = () => {
  return (
    <footer className="footer">
      © 2023 - copyright Radosław Włodarski
      <br />
      <img
        className="footer__icon"
        width="40"
        height="24"
        src={envelope}
        alt="mail_me"
        onClick={() => (window.location = "mailto:wlodarski.radek@gmail.com")}
      />
    </footer>
  );
};

export default Footer;
