import styled from "styled-components";

import { ReactComponent as DinheiroSVG } from "../../assets/images/dinheiro.svg";
import { ReactComponent as BackgroundSVG } from "../../assets/images/background.svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background-color: white;
  font-family: "Basic";

  bold {
    font-family: "Basic-Black";
  }
`;

const Dinheiro = styled(DinheiroSVG)`
  width: 400px;
  position: absolute;
  z-index: 100;
  bottom: 140px;
  left: calc(50% - 200px);
  cursor: default;

  @media only screen and (max-width: 1580px) {
    bottom: 95px;
    left: calc(50% - 120px);
  }
  @media only screen and (max-width: 780px) {
    bottom: 80px;
    left: calc(50% - 100px);
  }
  @media only screen and (max-width: 500px) {
    bottom: 58px;
    left: calc(50% - 70px);
  }
`;

const Background = styled(BackgroundSVG)`
  width: 400px;
  position: absolute;
  z-index: 9;
  bottom: 140px;
  left: calc(50% - 200px);

  @media only screen and (max-width: 1580px) {
    bottom: 95px;
    left: calc(50% - 120px);
  }
  @media only screen and (max-width: 780px) {
    bottom: 80px;
    left: calc(50% - 100px);
  }
  @media only screen and (max-width: 500px) {
    bottom: 58px;
    left: calc(50% - 70px);
  }
`;

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  color: #552367;
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 100%;
  bottom: -300px;
  left: calc(50% - 250px);
  z-index: 1000;

  h1 {
    font-size: 80px;
    word-spacing: -4px;
    margin-top: -40px;
  }
  bold {
    letter-spacing: -1px;
  }
  h2 {
    word-spacing: -4px;
    font-size: 50px;
  }

  @media only screen and (max-width: 1580px) {
    svg {
      width: 240px;
    }
    bottom: -190px;
    h1 {
      font-size: 54px;
      word-spacing: -3px;
      margin-top: -15px;
    }
    h2 {
      word-spacing: -2px;
      font-size: 32px;
    }
    bold {
      letter-spacing: 0px;
    }
  }
  @media only screen and (max-width: 780px) {
    svg {
      width: 200px;
    }
    bottom: -160px;
    h1 {
      font-size: 45px;
      word-spacing: -3px;
      margin-top: -15px;
    }
    h2 {
      word-spacing: -2px;
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 500px) {
    left: 0;
    bottom: -115px;

    svg {
      width: 140px;
    }
    bold {
      letter-spacing: 1px;
    }
    h1 {
      font-size: 30px;
      word-spacing: -3px;
      margin-top: -15px;
    }
    h2 {
      word-spacing: -2px;
      font-size: 24px;
    }
  }
`;

const MainButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  margin-bottom: 600px;
  margin-top: 380px;
  border-radius: 100px;
  box-sizing: border-box;
  padding: 50px;
  cursor: pointer;

  @media only screen and (max-width: 1720px) {
    margin-bottom: 500px;
  }
  @media only screen and (max-width: 1580px) {
    margin-bottom: 380px;
    gap: 50px;
    border-radius: 60px;
    padding: 40px;
    margin-top: 260px;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    background-color: white;
    border: none;
    border-radius: none;
    box-shadow: none;
    gap: 50px;
    margin-bottom: 340px;
  }
  @media only screen and (max-width: 900px) {
    gap: 20px;
    margin-top: 140px;
    margin-bottom: 280px;
  }
`;

const MainButton = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 40px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1580px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 780px) {
    width: 180px;
    height: 180px;
  }
  @media only screen and (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
`;

const LoadImage = styled.img`
  width: 0px;
  height: 0px;
  position: absolute;
  top: 0;
  left: 0;
`;

const PlusContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -70px;
  left: 0;
  cursor: default;

  svg {
    width: 560px;
    height: 181.8px;
  }

  @media only screen and (max-width: 1580px) {
    height: 100px;
    bottom: -50px;

    svg {
      height: 136.34px;
      width: 420px;
    }
  }
  @media only screen and (max-width: 780px) {
    height: 50px;
    bottom: -25px;

    svg {
      height: 81.16px;
      width: 250px;
    }
  }
  @media only screen and (max-width: 630px) {
    height: 30px;
    bottom: -15px;

    svg {
      height: 38.96px;
      width: 120px;
    }
  }
`;

export {
  Container,
  MainButtonsContainer,
  MainButton,
  TextImageContainer,
  Dinheiro,
  Background,
  PlusContainer,
  LoadImage,
};
