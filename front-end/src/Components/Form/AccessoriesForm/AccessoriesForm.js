import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { InnerDisplay } from "../Display";
import {
  AccessoryContainer,
  AccessoriesContainer,
  ButtonsContainer,
} from "./style";
import Input from "../../UserForms/Input";
import { Radio } from "../../Radio";
import { AddRemoveButton } from "../GamesForm/style";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Container } from "../../Container";

export default function AccessoriesForm({
  values,
  setValues,
  display,
  setDisplay,
}) {
  const [selectedOption, setSelectedOption] = useState(false);

  function handleSelectedOption() {
    let countCompleted = 0;
    values.accessories.forEach((element) => {
      if (element.name && element.state && element.boxInputed && element.brand)
        countCompleted++;
    });
    if (countCompleted === values.accessories.length) setSelectedOption(true);
    else setSelectedOption(false);
  }

  return (
    <Container
      height={"800px"}
      open={true ? "1150px" : false}
      hdScreen={"400px"}
      openHd={"950px"}
      games={true}
      display={display}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          <bold>Quais Acessórios você quer vender?</bold>
        </h1>
      </div>
      <InnerDisplay display={true} isAccessories={true}>
        <AccessoriesContainer>
          {values.accessories.map((value, index) => {
            return (
              <AccessoryContainer key={index}>
                <div>
                  <h1>Nome do acessório</h1>
                  <Input
                    label="Nome do Acessório"
                    type="text"
                    onChange={(e) => {
                      const aux = { ...values };
                      aux.accessories[index].name = e.target.value;
                      setValues(aux);
                      if (e.target.value === "") setSelectedOption(false);
                      else handleSelectedOption();
                    }}
                    value={values.accessories[index].name}
                    style={{ width: "300px", backgroundColor: "#ededed" }}
                  />
                </div>
                <div>
                  <h1>Nome da Marca</h1>
                  <Input
                    label="Nome da marca do Acessório"
                    type="text"
                    onChange={(e) => {
                      const aux = { ...values };
                      aux.accessories[index].brand = e.target.value;
                      setValues(aux);
                      if (e.target.value === "") setSelectedOption(false);
                      else handleSelectedOption();
                    }}
                    value={values.accessories[index].brand}
                    style={{ width: "245px" }}
                  />
                </div>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <h1>Estado de conservação</h1>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Radio
                        type="radio"
                        id="novo"
                        name="console_state"
                        value="Novo"
                        onChange={(e) => {
                          const aux = { ...values };
                          aux.accessories[index].state = e.target.value;
                          setValues(aux);
                          handleSelectedOption();
                        }}
                      />
                      <label htmlFor="novo">Novo</label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Radio
                        type="radio"
                        id="usado"
                        name="console_state"
                        value="Usado"
                        onChange={(e) => {
                          const aux = { ...values };
                          aux.accessories[index].state = e.target.value;
                          setValues(aux);
                          handleSelectedOption();
                        }}
                      />
                      <label htmlFor="usado">Usado</label>
                    </div>
                  </div>
                </form>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <h1>Tem a caixa original?</h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Radio
                        type="radio"
                        id="nao"
                        name="box"
                        value={false}
                        onChange={(e) => {
                          const aux = { ...values };
                          aux.accessories[index].box = false;
                          aux.accessories[index].boxInputed = true;
                          setValues(aux);
                          handleSelectedOption();
                        }}
                      />
                      <label htmlFor="nao">Não</label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Radio
                        type="radio"
                        id="sim"
                        name="box"
                        value={true}
                        onChange={(e) => {
                          const aux = { ...values };
                          aux.accessories[index].box = true;
                          aux.accessories[index].boxInputed = true;
                          setValues(aux);
                          handleSelectedOption();
                        }}
                      />
                      <label htmlFor="sim">Sim</label>
                    </div>
                  </div>
                </form>
              </AccessoryContainer>
            );
          })}
        </AccessoriesContainer>
        <ButtonsContainer buttons={values.accessories.length}>
          {values.accessories.length > 1 ? (
            <AddRemoveButton
              style={{ cursor: "pointer" }}
              onClick={() => {
                const auxValues = { ...values };
                auxValues.accessories.pop();
                setValues(auxValues);
                handleSelectedOption();
              }}
            >
              <AiFillMinusCircle />
              <h1>Remover Acessório</h1>
            </AddRemoveButton>
          ) : (
            <></>
          )}
          <AddRemoveButton
            onClick={() => {
              const auxValues = { ...values };
              auxValues.accessories.push({
                name: "",
                state: "",
                box: false,
                brand: "",
              });
              setValues(auxValues);
              setSelectedOption(false);
            }}
          >
            <AiFillPlusCircle />
            <h1>Adicionar Acessório</h1>
          </AddRemoveButton>
        </ButtonsContainer>
      </InnerDisplay>
      <Buttons setDisplay={setDisplay} selectedOption={selectedOption} />
    </Container>
  );
}
