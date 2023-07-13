import styled from "styled-components";

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 1500px;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  margin-bottom: 20px;

  @media only screen and (max-width: 1500px) {
    width: 1200px;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: row;
    overflow-y: hidden !important;
    ${(props) =>
      props.number === 1
        ? "width: 255px;"
        : "width: 300px; overflow-x: scroll !important;"};
    box-sizing: border-box;
    padding: 40px 20px 40px 10px;
    gap: 20px;
    margin-left: 10px;
  }
  h1 {
    width: 100%;
    text-align: start !important;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: flex-end;
  text-overflow: clip;
  flex-wrap: nowrap;
  word-wrap: normal;
  width: 1500px;
  font-size: 36px;

  @media only screen and (max-width: 1500px) {
    width: 1200px;
    font-size: 24px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-bottom: 20px;
    gap: 20px;
    width: 250px !important;
  }
`;

export const AddRemoveButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  -webkit-tap-highlight-color: transparent !important;

  .react-icons {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 26px;
  }

  @media only screen and (max-width: 1500px) {
    .react-icons {
      width: 40px;
      height: 40px;
    }
    h1 {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 160px !important;
    h1 {
      max-width: 160px !important;
      font-size: 16px !important;
      text-align: center;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: -90px;
  left: ${(props) => `calc(50% - ${props.buttons === 1 ? "80px" : "169px"})`};

  @media only screen and (max-width: 1500px) {
    h1 {
      font-size: 18px;
    }
    left: ${(props) => `calc(50% - ${props.buttons === 1 ? "55px" : "120px"})`};
  }
  @media only screen and (max-width: 1200px) {
    width: ${(props) =>
      props.buttons === 1 ? "160px !important" : "340px !important"};
    left: ${(props) => `calc(50% - ${props.buttons === 1 ? "80px" : "170px"})`};

    h1 {
      width: 160px !important;
    }
  }
`;
