import { BodyContainer } from "./styles";
import pet from "../../Assets/img/pet.png";

import { PrimaryButton } from "../../Styles/global";

const Main = () => {
  return (
    <BodyContainer>
      <div>
        <div className="divTextButton">
          <h2>
            Adote um pet ou tenha a melhor loja de produtos para animais na
            palma da sua mão
          </h2>
          <PrimaryButton>Criar conta unificada</PrimaryButton>
        </div>
        <img alt="doguinho" src={pet} />
      </div>
    </BodyContainer>
  );
};

export default Main;
