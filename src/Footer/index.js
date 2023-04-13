import {StyledFooter, StyledIcon} from "./styled.js";
import envelope from "../envelope.png";

const Footer = () => (
  <StyledFooter>
    <div>© 2023 - copyright Radosław Włodarski</div>
    <a href="mailto:wlodarski.radek@gmail.com">
      <StyledIcon
        width="40"
        height="24"
        src={envelope}
        alt="mail_me"
      />
    </a>
  </StyledFooter>
);

export default Footer;
