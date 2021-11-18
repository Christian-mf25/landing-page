import styled from "styled-components";

export const BodyContainer = styled.div`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 85%;

    h2 {
      padding-top: 25px;
    }

    button {
      margin-top: 25px;
    }

    img {
      height: 200px;
    }
  }

  @media (min-width: 768px) {
    div {
      flex-direction: row;

      h2 {
        padding-top: 0;
        padding-bottom: 15px;
      }

      img {
        height: 400px;
      }
    }

    .divTextButton {
      width: 50vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (min-width: 1024px) {
    div {
      display: flex;
      align-items: center;
    }

    h2 {
      width: 350px;
    }
  }
`;
