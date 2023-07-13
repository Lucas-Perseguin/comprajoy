import styled from "styled-components";

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  margin-top: ${(props) => (!props.simple ? "100px" : "0px")};
  color: #552367;
  font-size: ${(props) => (props.simple ? "30px" : "")};
  text-align: center;

  @media only screen and (max-width: 1500px) {
    margin-top: ${(props) => (!props.simple ? "40px" : "0px")};
    font-size: ${(props) => (props.simple ? "22px" : "")};
  }
`;
