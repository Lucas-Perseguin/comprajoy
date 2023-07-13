import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 150px;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 0 20px;
  position: relative;

  .react-icons,
  img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    color: #552367;
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) {
    height: 80px;
    .react-icons,
    img {
      width: 35px;
      height: 35px;
    }
  }
  @media only screen and (max-width: 500px) {
    height: 60px;
    .react-icons,
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const CategoriesContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  height: 600px;
  width: 350px;
  z-index: 100000;
  background: #fbfbfb;
  border-radius: 60px 0px 60px 20px;
  box-sizing: border-box;
  padding: 8px;
  gap: 6px;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;

  @media only screen and (max-width: 1500px) {
    height: 450px;
    width: 260px;
    top: 60px;
    right: 24px;
    padding: 4px;
  }
  @media only screen and (max-width: 500px) {
    top: 50px;
    right: 20px;
    width: 175px;
    height: 300px;
    gap: 3px;
    padding: 3px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 10px;
  }
`;

export const Category = styled.div`
  width: 100%;
  height: calc(600px / 6);
  border: ${(props) =>
    props.name === props.param ? "none" : "1px solid #552367"};
  border-radius: 20px 0px 20px 8px;
  border-top-left-radius: ${(props) =>
    props.name === "Playstation" ? "60px" : "20px"};
  border-bottom-right-radius: ${(props) =>
    props.name === "Jogos" ? "60px" : "20px"};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-left: 40px;
  gap: 40px;
  font-size: 35px;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.name === props.param ? "white" : "#552367")};
  background-color: ${(props) =>
    props.name === props.param ? "#552367" : "white"};

  .react-icons,
  img {
    color: ${(props) => (props.name === props.param ? "white" : "#552367")};
  }
  h1 {
    margin-top: 6px;
  }

  @media only screen and (max-width: 1500px) {
    height: calc(450px / 6);
    font-size: 24px;
    gap: 25px;

    h1 {
      margin-top: 4px;
    }
  }
  @media only screen and (max-width: 500px) {
    height: calc(300px / 6);
    font-size: 16px;
    gap: 20px;
    padding-left: 20px;

    h1 {
      margin-top: 2px;
    }
    .react-icons,
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Logo = styled.img`
  width: 135px !important;
  height: 74px !important;
  position: absolute;
  bottom: calc(50% - 37px);
  left: calc(50% - 67.5px);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;

  @media only screen and (max-width: 1500px) {
    width: 80px !important;
    height: 43.85px !important;
    bottom: calc(50% - 22px);
    left: calc(50% - 40px);
  }
  @media only screen and (max-width: 500px) {
    width: 60px !important;
    height: 32.89px !important;
    bottom: calc(50% - 16.4px);
    left: calc(50% - 30px);
  }
`;

export const RetroIcon = styled.img`
  width: 50px !important;
  height: 43.14px !important;

  @media only screen and (max-width: 1500px) {
    width: 35px !important;
    height: 30.2px !important;
  }
  @media only screen and (max-width: 500px) {
    width: 24px !important;
    height: 20.7px !important;
  }
`;

export const AccessoriesIcon = styled.img`
  width: 50px !important;
  height: 33.33px !important;

  @media only screen and (max-width: 1500px) {
    width: 35px !important;
    height: 23.33px !important;
  }
  @media only screen and (max-width: 500px) {
    width: 24px !important;
    height: 16px !important;
  }
`;
