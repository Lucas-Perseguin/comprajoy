import styled from "styled-components";

export const Hidden = styled.div`
  width: ${(props) => (props.simple ? "370px" : "340px")};
  height: ${(props) => (props.simple ? "20px" : "50px")};
  background: rgba(85, 35, 103, 0.8);
  border: 2px solid rgba(85, 35, 103, 0.8);
  border-radius: 0px 70px 70px 70px;
  font-size: 20px;
  color: white;
  word-wrap: break-word;
  padding: 12px;
  position: absolute;
  left: 60px;
  top: 50px;

  bold {
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1000px) {
    width: 260px;
    height: 30px;
    font-size: 14px;
    border-radius: 70px 0 70px 70px;
    left: -160px;
    top: 50px;
  }
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
