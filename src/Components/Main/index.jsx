import { BodyContainer } from "./styles";
import pet from "../../Assets/img/pet.png";

import { PrimaryButton } from "../../Styles/global";

const Main = () => {
  const handleClickRegister = () =>
    (window.location.href = "https://home-pets-adoption.vercel.app/register");

  return (
    <BodyContainer>
      <div>
        <div className="divTextButton">
          <h2>
            Adote um pet ou tenha a melhor loja de produtos para animais na
            palma da sua mão
          </h2>
          <PrimaryButton onClick={handleClickRegister}>
            Criar conta unificada
          </PrimaryButton>
        </div>
        <img alt="doguinho" src={pet} />
      </div>
    </BodyContainer>
  );
};

export default Main;
