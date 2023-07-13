import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 100px;
  left: ${(props) =>
    props.single
      ? "calc(50% - 115px)"
      : props.selectedOption
      ? "calc(50% - 240px)"
      : "calc(50% - 115px)"};

  @media only screen and (max-width: 1500px) {
    left: ${(props) =>
      props.single
        ? "calc(50% - 80px)"
        : props.selectedOption
        ? "calc(50% - 170px)"
        : "calc(50% - 80px)"};
  }
  @media only screen and (max-width: 1000px) {
    left: ${(props) =>
      props.single
        ? "calc(50% - 70px)"
        : props.selectedOption
        ? "calc(50% - 150px)"
        : "calc(50% - 70px)"};
    bottom: 80px;
  }
`;

export const Button = styled.button`
  width: 230px;
  height: 70px;
  background: #552367;
  border-radius: 70px;
  font-size: 35px;
  border: none;
  color: white;
  cursor: pointer;

  @media only screen and (max-width: 1500px) {
    height: 50px;
    width: 160px;
    font-size: 24px;
  }
  @media only screen and (max-width: 1000px) {
    height: 40px;
    width: 140px;
    font-size: 20px;
  }
`;
