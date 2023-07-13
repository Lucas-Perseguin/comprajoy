import styled from "styled-components";

const SubmitContainer = styled.div`
  margin-top: 20px !important;
  width: 100% !important;
  > button {
    margin-top: 0 !important;
  }
`;

const Container = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 20px;
  background-color: white;
  position: relative;

  .react-icons {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 200;
    cursor: pointer;
    color: black;
  }

  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 30px;
`;

const switchButton = {
  backgroundColor: "red",
  marginTop: "10px",
};

export { SubmitContainer, Container, Title, switchButton };
