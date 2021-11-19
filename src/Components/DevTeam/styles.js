import styled from "styled-components";

export const DevTeamContainer = styled.div`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  .cards {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-primary-50);
    border-radius: 5px;
    width: 190px;
    height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    img {
      margin: 0 auto;
      height: 55px;
      border-radius: 100px;
    }
  }

  @media (min-width: 768px) {
    height: 400px;
    display: flex;
    align-items: center;

    .container {
      display: flex;

      div {
        margin-left: 10px;
        margin-right: 10px;
      }
    }

    .cards {
      height: 200px;
      width: 150px;
      justify-content: space-evenly;

      img {
        height: 75px;
      }
    }
  }

  @media (min-width: 1024px) {
    .cards {
      height: 250px;
      width: 200px;

      img {
        height: 90px;
      }
    }

    .container {
      div {
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }
`;
