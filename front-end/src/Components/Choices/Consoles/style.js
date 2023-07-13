import styled from "styled-components";

export const FirstPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 1280px;
  box-sizing: border-box;
  padding: 420px 0 140px;

  @media only screen and (max-width: 1500px) {
    height: ${(props) => `${props.hdScreen}`};
    padding: 280px;
  }
  @media only screen and (max-width: 500px) {
    height: ${(props) => `${props.mobileScreen}`};
    padding: 180px;
    min-height: calc(100vh - 180px);
    min-height: calc(100svh - 180px);

    h1 {
      width: 90vw;
      width: 90svw;
      text-align: center;
    }
  }
`;
