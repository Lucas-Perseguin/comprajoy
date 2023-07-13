import styled from "styled-components";

export const Display = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const InnerDisplay = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  position: relative;
  max-height: 340px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;

  @media screen and (max-width: 1500px) {
    max-height: 300px;
  }
  @media screen and (max-width: 1200px) {
    height: ${(props) => (props.isAccessories ? "450px" : "345x")};
    max-height: 800px;
  }
`;
