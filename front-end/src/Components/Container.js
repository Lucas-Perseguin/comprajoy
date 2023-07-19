import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: ${(props) =>
    props.small ? "0px" : "calc(100vh - (120px + 60px))"};
  min-height: ${(props) =>
    props.small ? "0px" : "calc(100svh - (120px + 60px))"};
  height: ${(props) => (props.open ? `${props.open}` : `${props.height}`)};
  box-sizing: border-box;
  padding: ${(props) => (props.small ? "0px" : "420px 0 140px")};

  @media only screen and (max-width: 1500px) {
    height: ${(props) =>
      props.open
        ? props.small
          ? `${props.smallOpenHd}`
          : `${props.openHd}`
        : props.small
        ? `${props.smallHd}`
        : `${props.hdScreen}`};
    padding: ${(props) => (props.small ? "0px" : "280px")};
  }
  @media screen and (max-width: 1200px) {
    ${(props) =>
      props.games
        ? `height: ${
            props.open
              ? props.games
                ? props.display === 2
                  ? "1250px"
                  : "1050px"
                : ""
              : ""
          }`
        : ""};
  }
  @media only screen and (max-width: 500px) {
    height: ${(props) =>
      props.open
        ? props.small
          ? `${props.smallOpenMobile}`
          : `${props.openMobile}`
        : props.small
        ? `${props.smallMobile}`
        : `${props.mobileScreen}`};
    padding: ${(props) => (props.small ? "0px" : "180px")};
    ${(props) => (!props.small ? "min-height: calc(100vh - 180px)" : "")};
    ${(props) => (!props.small ? "min-height: calc(100svh - 180px)" : "")};

    h1 {
      width: 90vw;
      text-align: center;
    }
  }
`;
