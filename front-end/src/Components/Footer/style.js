import styled from "styled-components";

import { ReactComponent as SellerSVG } from "../../assets/images/seller.svg";
import { ReactComponent as ControleBrancoSVG } from "../../assets/images/controle_branco.svg";

export const Seller = styled(SellerSVG)`
  width: 150px !important;
  height: 150px !important;
  position: absolute;
  right: 1%;
  top: -80px;

  @media only screen and (max-width: 1720px) {
    width: 120px !important;
    height: 120px !important;
    right: 0.75%;
    top: -70px;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const ControleBranco = styled(ControleBrancoSVG)`
  width: 26px;
  height: 26px;

  @media only screen and (max-width: 1500px) {
    width: 20px;
    height: 20px;
  }
`;

export const LinksContainer = styled.div`
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: #552367;
  padding: 0 1.5%;
  color: white;
  font-size: 22px;
  word-spacing: -2px;
  position: relative;

  img {
    width: 140px;
    aspect-ratio: 140/98;
  }
  a:active {
    text-decoration: none;
    color: white;
  }
  a:visited {
    text-decoration: none;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  bold {
    letter-spacing: 0px;
  }
  svg {
    height: 40px;
    margin-right: 10px;
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 1580px) {
    height: 120px;
    font-size: 16px;

    bold {
      letter-spacing: 1px;
    }
    svg {
      height: 30px;
      margin-bottom: 2px;
    }
  }
  @media screen and (max-width: 900px) {
    height: 160px;
    font-size: 14px;
    word-spacing: 0;
    padding: 0 25px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding-bottom: 10px;
    border-radius: 0;
    letter-spacing: 0 !important;

    bold {
      letter-spacing: 1px;
    }
    svg {
      height: 20px;
      margin-bottom: 4px;
      margin-right: 4px;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media only screen and (max-width: 1500px) {
    gap: 0px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: #552367;
  position: absolute;
  bottom: 620px;
  left: calc(50% - 191.64px);
  align-items: center;

  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 30px;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 1800px) {
    bottom: 560px;
  }
  @media screen and (max-width: 1580px) {
    bottom: 390px;
    left: calc(50% - 146.96px);

    h1 {
      font-size: 45px;
    }
    h2 {
      letter-spacing: 0;
      font-size: 22px;
    }
  }
  @media screen and (max-width: 1200px) {
    bottom: 330px;
  }
  @media screen and (max-width: 1000px) {
    bottom: 310px;
  }
  @media screen and (max-width: 900px) {
    bottom: 320px;
    left: calc(50% - 90.3px);

    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 18px;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  bottom: calc(50% - 49px);
  left: calc(50% - 70px);

  @media only screen and (max-width: 1580px) {
    img {
      width: 90px;
    }
    bottom: calc(50% - 31.5px);
    left: calc(50% - 45px);
  }
  @media only screen and (max-width: 900px) {
    img {
      width: 60px;
    }
    bottom: 100px;
    left: calc(50% - 30px);
  }
`;

export const TermsAndInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media only screen and (max-width: 1500px) {
    gap: 15px;
  }
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media only screen and (max-width: 900px) {
    gap: 8px;
  }
`;

export const Video = styled.iframe`
  clip-path: url(#clip);
  -webkit-clip-path: url(#clip);
  height: 568px;
  width: 100%;
  object-fit: cover;

  @media only screen and (max-width: 1800px) {
    height: 532px;
  }
  @media only screen and (max-width: 1580px) {
    height: 355px;
  }
  @media only screen and (max-width: 1200px) {
    height: 284px;
  }
  @media only screen and (max-width: 1000px) {
    height: 248px;
  }
  @media only screen and (max-width: 900px) {
    height: 199px;
  }
`;

export const Joystick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 800px;
  aspect-ratio: 1.5;
  bottom: 40px;
  left: calc(50% - 400px);

  svg {
    position: absolute;
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 1800px) {
    width: 750px;
    left: calc(50% - 375px);
    bottom: 6px;
  }
  @media only screen and (max-width: 1580px) {
    width: 500px;
    left: calc(50% - 250px);
    bottom: 30px;
  }
  @media only screen and (max-width: 1200px) {
    width: 400px;
    left: calc(50% - 200px);
    bottom: 40px;
  }
  @media only screen and (max-width: 1000px) {
    width: 350px;
    left: calc(50% - 175px);
    bottom: 60px;
  }
  @media only screen and (max-width: 900px) {
    width: 280px;
    left: calc(50% - 140px);
    bottom: 110px;
  }
`;
