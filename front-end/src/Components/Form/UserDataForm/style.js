import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 100px;
  left: calc(50% - 235px);

  @media only screen and (max-width: 1500px) {
    left: calc(50% - 170px);
  }
  @media only screen and (max-width: 1000px) {
    left: calc(50% - 150px);
    bottom: 80px;
  }
`;

export const Button = styled.button`
  width: 230px;
  height: 70px;
  background-color: #552367;
  color: white;
  border-radius: 70px;
  font-size: 35px;
  border: none;
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
