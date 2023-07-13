import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0px;
  font-size: 34px;
  text-align: center;
  height: ${(props) => (props.selected ? "1600px" : "1200px")};
  box-sizing: border-box;
  padding-top: 400px;
  min-height: calc(100vh - (120px + 60px));
  min-height: calc(100svh - (120px + 60px));

  textarea {
    width: 600px;
    height: 220px;
  }

  @media only screen and (max-width: 1500px) {
    padding-top: 280px;
    font-size: 22px;
    height: ${(props) => (props.selected ? "1200px" : "950px")};

    textarea {
      width: 500px;
      height: 150px;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding-top: 180px;
    font-size: 20px;
    height: ${(props) =>
      props.selected ? "1680px" : props.optionSelected ? "1100px" : "750px"};
    ${(props) => (props.isOther ? "height: 1100px !important" : "")};

    textarea {
      width: 320px;
      height: 150px;
      font-size: 16px;
    }
    h2 {
      width: 90vw;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 533px);
  margin: 0 20px;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, 320px);
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 320px);
    margin-bottom: 20px;
  }
`;

export const AccessoriesQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  textarea {
    width: 500px;
    height: 220px;
  }

  @media only screen and (max-width: 1500px) {
    textarea {
      width: 320px;
      height: 150px;
    }
  }
  @media only screen and (max-width: 500px) {
    textarea {
      width: 320px;
      height: 150px;
    }
  }
`;

export const Option = styled.div`
  background-color: ${(props) => (props.selected ? "#552367" : "#e5e5e5")};
  color: ${(props) => (props.selected ? "white" : "#552367")};
  border: ${(props) => (props.selected ? "none" : "2px solid #552367")};
  height: 50px;
  width: 180px;
  border-radius: 20px;
  box-sizing: border-box;
  padding-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;

  @media only screen and (max-width: 1500px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 1000px) {
    width: 120px;
    height: 35px;
    font-size: 20px;
  }
`;

export const Options = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  gap: 10px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1000px) {
    display: ${(props) => (props.display ? "grid" : "none")};
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CheckbooxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
