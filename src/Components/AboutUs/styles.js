import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;

  .aboutImgText {
    padding-top: 20px;
    .patinhas {
      height: 200px;
    }

    .aboutUsParag {
      padding: 10px 25px;
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    .aboutImgText {
      display: flex;
      justify-content: space-around;

      .patinhas {
        height: 400px;
      }

      .textAboutUsParag {
        width: 35%;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .aboutUsParag {
          padding-left: 0;
        }
      }
    }
  }
`;
