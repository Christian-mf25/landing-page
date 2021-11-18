import { FooterContainer } from "./styles";
import logo from "../../Assets/img/Logo.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <img alt="logo" src={logo} />
      </FooterContainer>
    </>
  );
};

export default Footer;
