import logo from "../../Assets/img/Logo.png";
import littlePaw from "../../Assets/img/littlePaw.png";
import shoppingCart from "../../Assets/img/shopping-cart.png";
import { HeaderContainer } from "./styles";

const Header = () => {
  const handleClickLogo = () => console.log("clicou");

  const handleClickEcommerce = () => console.log("clicou");

  return (
    <>
      <HeaderContainer>
        <img className="logoImg" alt="logo" src={logo} />
        <div>
          <div className="divClick divLeft" onClick={handleClickLogo}>
            <img alt="home pets link" src={littlePaw} />
            <p className="texts">Home Pets Adoption</p>
          </div>
          <div className="divClick" onClick={handleClickEcommerce}>
            <img alt="ecommerce link" src={shoppingCart} />
            <p className="texts">Home Pets Adoption</p>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
