import { toast } from "react-toastify";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { Container, switchButton, Title, SubmitContainer } from "./style.js";

import useSaveSignIn from "../../../hooks/api/useSaveSignIn.js";
import { useForm } from "../../../hooks/useForm.js";

import Input from "../../UserForms/Input.js";
import Button from "../../UserForms/Button.js";
import { FormWrapper } from "../shared/FormWrapper.js";
import { InputWrapper } from "../shared/InputWrapper.js";
import { ErrorMsg } from "../shared/ErrorMsg.js";
import FormValidations from "../shared/FormValidations.js";

export default function LoginForm({ setOpenModal, setLogin, isLogin }) {
  const { saveSignInLoading, saveSignIn } = useSaveSignIn();

  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    setData,
    customHandleChange,
  } = useForm({
    validations: FormValidations,

    onSubmit: async (data) => {
      const newData = {
        email: data.email,
        password: data.password,
      };

      try {
        const response = await saveSignIn(newData);
        setOpenModal(false);
        localStorage.setItem("token", response.token);
        toast.success("Login realizado com sucesso!");
      } catch (err) {
        toast.error("Não foi possível confirmar suas informações!");
      }
    },

    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Container>
      <AiOutlineCloseCircle onClick={() => setOpenModal(false)} />
      <Title>Suas Informações</Title>
      <FormWrapper onSubmit={handleSubmit} isLogin={isLogin}>
        <InputWrapper>
          <Input
            label="E-Mail"
            name="email"
            type="text"
            value={data?.email || ""}
            onChange={handleChange("email")}
          />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Senha"
            name="password"
            type="password"
            value={data?.password || ""}
            onChange={handleChange("password")}
          />
          {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        </InputWrapper>

        <SubmitContainer>
          <Button type="submit" disabled={saveSignInLoading}>
            LogIn
          </Button>
        </SubmitContainer>
      </FormWrapper>
      <button style={switchButton} onClick={() => setLogin(false)}>
        Ainda não possui uma conta? Vá para o Cadastro!
      </button>
    </Container>
  );
}
