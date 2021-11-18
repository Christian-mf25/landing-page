import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: var(--color-secondary);
  height: 80px;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 5px;

  div {
    display: flex;
    align-items: center;

    img {
      height: 25px;
      margin-right: 20px;
    }

    img:hover {
      cursor: pointer;
    }

    .texts {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding-left: 60px;
    padding-right: 40px;

    div {
      img {
        margin-right: 5px;
      }

      .texts {
        display: flex;
        margin-right: 10px;
        color: #fff;
      }
    }

    .divClick:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    .divLeft {
      margin-right: 30px;
    }
  }
`;
