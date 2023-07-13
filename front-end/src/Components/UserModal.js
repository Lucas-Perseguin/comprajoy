import { useState } from "react";
import styled from "styled-components";
import PersonalInformationForm from "./Modals/SignUp/SignUp.js";
import LoginForm from "./Modals/SignIn/SignIn.js";

export default function UserModal({ setOpenModal }) {
  const [isLogin, setLogin] = useState(false);
  return (
    <Container>
      {isLogin ? (
        <LoginForm
          setOpenModal={setOpenModal}
          setLogin={setLogin}
          isLogin={isLogin}
        />
      ) : (
        <PersonalInformationForm
          setOpenModal={setOpenModal}
          setLogin={setLogin}
          isLogin={isLogin}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: rgba(250, 250, 250, 0.75);
`;
