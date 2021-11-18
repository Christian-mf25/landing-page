import { DevTeamContainer } from "./styles";

const DevTeam = () => {
  return (
    <DevTeamContainer>
      <section className="ourTeamText">
        <h2>Nossa Equipe</h2>
      </section>
      <div className="container">
        <div className="cards">
          <img
            alt="dev img"
            src="https://ca.slack-edge.com/TQZR39SET-U02448EP4GY-c620bf5fde0c-512"
          />
          <h4>Christian Ferreira</h4>
          <p>Tech Lead</p>
          <p>Frontend Developer</p>
        </div>
        <div className="cards">
          <img
            alt="dev img"
            src="https://ca.slack-edge.com/TQZR39SET-U01QTPZRKLK-4aaf746ab24f-512"
          />
          <h4>Victor Varela</h4>
          <p>Scrum Master</p>
          <p>Frontend Developer</p>
        </div>
        <div className="cards">
          <img
            alt="dev img"
            src="https://ca.slack-edge.com/TQZR39SET-U0230C66N3U-be5672acd0a6-512"
          />
          <h4>Júlio Marodin</h4>
          <p>Product Owner</p>
          <p>Frontend Developer</p>
        </div>
        <div className="cards">
          <img
            alt="dev img"
            src="https://ca.slack-edge.com/TQZR39SET-U01SDMECLGZ-d40f9dbb46b7-512"
          />
          <h4>Gyl Monteiro</h4>
          <p>Quality Assurance</p>
          <p>Frontend Developer</p>
        </div>
      </div>
    </DevTeamContainer>
  );
};

export default DevTeam;
