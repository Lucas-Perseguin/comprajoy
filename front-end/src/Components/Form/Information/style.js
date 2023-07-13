import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  height: 1000px;
  padding-top: 400px;
  min-height: calc(100vh - (120px + 60px));
  min-height: calc(100svh - (120px + 60px));

  textarea {
    width: 800px;
    height: 300px;
    font-size: 24px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 1500px) {
    padding-top: 280px;
    height: 840px;
  }
  @media only screen and (max-width: 1000px) {
    textarea {
      font-size: 20px;
      width: 300px;
    }
    height: 700px;
    padding-top: 180px;
  }
`;
