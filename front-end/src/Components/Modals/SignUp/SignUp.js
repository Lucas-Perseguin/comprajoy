import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuItem } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Container, switchButton, Title, SubmitContainer } from "./style.js";

import useCep from "../../../hooks/api/useCep.js";
import useSaveSignUp from "../../../hooks/api/useSaveSignUp.js";
import { useForm } from "../../../hooks/useForm.js";

import Input from "../../UserForms/Input.js";
import Button from "../../UserForms/Button.js";
import Select from "../../UserForms/Select.js";
import { FormWrapper } from "../shared/FormWrapper.js";
import { InputWrapper } from "../shared/InputWrapper.js";
import { ErrorMsg } from "../shared/ErrorMsg.js";
import { ufList } from "./ufList.js";
import FormValidations from "../shared/FormValidations.js";

export default function PersonalInformationForm({
  setOpenModal,
  setLogin,
  isLogin,
}) {
  const [dynamicInputIsLoading, setDynamicInputIsLoading] = useState(false);
  const { getCep } = useCep();
  const { saveSignUpLoading, saveSignUp } = useSaveSignUp();

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
      if (data.password !== data.repeatPassword) {
        return toast("As senhas devem ser iguais!");
      }
      const newData = {
        email: data.email,
        password: data.password,
        name: data.name,
        cpf: data.cpf.replaceAll(".", "").replaceAll("-", ""),
        Address: {
          cep: data.cep,
          street: data.street,
          city: data.city,
          number: data.number,
          state: data.state,
          neighborhood: data.neighborhood,
          addressDetail: data.addressDetail,
        },
        cellphone: data.cellphone
          .replace(/[^0-9]+/g, "")
          .replace(/^(\d{2})(9?\d{4})(\d{4})$/, "($1) $2-$3"),
      };

      try {
        await saveSignUp(newData);
        toast.success("Informações salvas com sucesso!");
      } catch (err) {
        toast.error("Não foi possível salvar suas informações!");
      }
    },

    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      cpf: "",
      name: "",
      cellphone: "",
      cep: "",
      street: "",
      city: "",
      number: "",
      state: "",
      neighborhood: "",
      addressDetail: "",
    },
  });

  function isValidCep(cep) {
    return cep.length === 8;
  }

  async function handleCepChanges(event) {
    const { name, value } = event.target;

    const valueWithoutMask = value.replace("-", "");

    if (isValidCep(valueWithoutMask)) {
      const newDataValues = {
        ...data,
        [name]: value,
      };

      setDynamicInputIsLoading(true);
      const cepData = await getCep(valueWithoutMask);
      setDynamicInputIsLoading(false);

      setData({
        ...newDataValues,
        street: cepData.logradouro,
        city: cepData.localidade,
        neighborhood: cepData.bairro,
        state: cepData.uf,
      });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <AiOutlineCloseCircle onClick={() => setOpenModal(false)} />
      <Title>Suas Informações</Title>
      <FormWrapper onSubmit={handleSubmit} isLogin={isLogin}>
        <InputWrapper>
          <Input
            label="Nome Completo"
            name="name"
            type="text"
            value={data?.name || ""}
            onChange={handleChange("name")}
          />
          {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
        </InputWrapper>
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
        <InputWrapper>
          <Input
            label="Repita a senha"
            name="repeatPassword"
            type="password"
            value={data?.repeatPassword || ""}
            onChange={handleChange("repeatPassword")}
          />
          {errors.repeatPassword && (
            <ErrorMsg>{errors.repeatPassword}</ErrorMsg>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            name="cpf"
            label="CPF"
            type="text"
            maxLength="14"
            mask="999.999.999-99"
            value={data?.cpf || ""}
            onChange={handleChange("cpf")}
          />
          {errors.cpf && <ErrorMsg>{errors.cpf}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Telefone"
            mask={
              data?.cellphone.length < 15
                ? "(99) 9999-99999"
                : "(99) 99999-9999"
            }
            name="cellphone"
            value={data?.cellphone || ""}
            onChange={handleChange("cellphone")}
          />
          {errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Input
            label="CEP"
            name="cep"
            mask="99999-999"
            value={data?.cep || ""}
            onChange={(e) => {
              handleChange("cep")(e);
              handleCepChanges(e);
            }}
          />
          {errors.cep && <ErrorMsg>{errors.cep}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Select
            label="Estado"
            name="state"
            id="state"
            value={data?.state || ""}
            onChange={handleChange("state")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {ufList.map((uf) => (
              <MenuItem value={uf.name} key={uf.id}>
                <em>{uf.name}</em>
              </MenuItem>
            ))}
          </Select>
          {errors.state && <ErrorMsg>{errors.state}</ErrorMsg>}
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Cidade"
            name="city"
            value={data?.city || ""}
            onChange={handleChange("city")}
            disabled={dynamicInputIsLoading}
          />
          {errors.city && <ErrorMsg>{errors.city}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Rua"
            name="street"
            value={data?.street || ""}
            onChange={handleChange("street")}
            disabled={dynamicInputIsLoading}
          />
          {errors.street && <ErrorMsg>{errors.street}</ErrorMsg>}
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Número"
            name="number"
            value={data?.number || ""}
            onChange={handleChange("number")}
          />
          {errors.number && <ErrorMsg>{errors.number}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Bairro"
            name="neighborhood"
            value={data?.neighborhood || ""}
            onChange={handleChange("neighborhood")}
            disabled={dynamicInputIsLoading}
          />
          {errors.neighborhood && <ErrorMsg>{errors.neighborhood}</ErrorMsg>}
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Complemento"
            name="addressDetail"
            value={data?.addressDetail || ""}
            onChange={handleChange("addressDetail")}
          />
        </InputWrapper>

        <SubmitContainer>
          <Button
            type="submit"
            disabled={dynamicInputIsLoading || saveSignUpLoading}
          >
            Salvar
          </Button>
        </SubmitContainer>
      </FormWrapper>
      <button style={switchButton} onClick={() => setLogin(true)}>
        Já possui uma conta? Vá para o Login!
      </button>
    </Container>
  );
}
