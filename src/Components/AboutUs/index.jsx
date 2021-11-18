import paws from "../../Assets/img/paws.png";
import { AboutContainer } from "./styles";

const AboutUs = () => {
  return (
    <AboutContainer>
      <h4>Sobre nós</h4>
      <div className="aboutImgText">
        <img className="patinhas" alt="patinhas" src={paws} />
        <div className="textAboutUsParag">
          <p className="aboutUsParag">
            A HomePets nasceu de uma iniciative de quatro amigos Desenvolvedores
            em relação ao grande problema comum em todo o Brasil e no mundo:
          </p>
          <p className="aboutUsParag">
            O problema de maus tratos e dificuldade de adoção de pets.
          </p>

          <p className="aboutUsParag">
            Com isso, apresentamos a HomePets Adoption, que é um sistema em que
            ONGs, Empresas e Pessoas podem criar seu cadastro e disponibilizar
            pets para doação para outros usuários.
          </p>

          <p className="aboutUsParag">
            A HomePets Ecommerce é uma plataforma de comércio online que
            possibilita a compra de produtos pets para seus pets ou, se
            preferir, doações para estas instituições.
          </p>
        </div>
      </div>
    </AboutContainer>
  );
};

export default AboutUs;
