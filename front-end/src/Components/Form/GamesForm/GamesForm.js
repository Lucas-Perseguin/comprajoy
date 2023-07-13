import { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import {
  AddRemoveButton,
  ButtonsContainer,
  GameContainer,
  GamesContainer,
} from "./style";
import Input from "../../UserForms/Input";
import { Radio } from "../../Radio";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Container } from "../../Container";
import { InnerDisplay } from "../Display";

export default function GamesForm({
  values,
  setValues,
  display,
  setDisplay,
  videogame = false,
  page = false,
  secondary = false,
}) {
  const [selectedOption, setSelectedOption] = useState(false);
  const [innerDisplay, setInnerDisplay] = useState(0);

  useEffect(() => {
    if (page && display === 1) {
      setInnerDisplay(1);
      const aux = { ...values };
      aux.games[0].console = videogame;
      setValues(aux);
    }
  }, [display]);

  function handleSelectedOption() {
    let countCompleted = 0;
    console.log(values.games);
    values.games.forEach((element) => {
      if (
        element.name &&
        element.state &&
        element.boxInputed &&
        element.console
      )
        countCompleted++;
    });
    if (countCompleted === values.games.length) setSelectedOption(true);
    else setSelectedOption(false);
  }

  return (
    <Container
      height={"800px"}
      open={innerDisplay === 1 ? "1200px" : false}
      hdScreen={"400px"}
      openHd={"1000px"}
      openMobile={display === 2 ? "1100px" : "1000px"}
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
          <bold>
            {page
              ? "Quais jogos você quer vender ?"
              : secondary
              ? "Quer vender jogos de outros consoles também?"
              : "Seu videogame acompanha jogos?"}
          </bold>
        </h1>
        {!page && (
          <form>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Radio
                type="radio"
                id="sim"
                name="console_state"
                value={true}
                onChange={(e) => {
                  setInnerDisplay(1);
                  setValues({
                    ...values,
                    games: [
                      {
                        name: "",
                        state: "",
                        box: false,
                        console: videogame ? videogame : "",
                      },
                    ],
                  });
                  setSelectedOption(false);
                }}
              />
              <label htmlFor="sim">Sim</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Radio
                type="radio"
                id="nao"
                name="console_state"
                value={false}
                onChange={(e) => {
                  if (!selectedOption) setSelectedOption(true);
                  setValues({
                    ...values,
                    games: [{ name: "", state: "", box: false, console: "" }],
                  });
                  setInnerDisplay(0);
                }}
              />
              <label htmlFor="nao">Não</label>
            </div>
          </form>
        )}
      </div>
      <InnerDisplay display={innerDisplay === 1}>
        <GamesContainer number={values.games.length}>
          {values.games.map((value, index) => {
            return (
              <GameContainer key={index}>
                <div>
                  <h1>Qual o nome do jogo?</h1>
                  <Input
                    label="Nome do Jogo"
                    type="text"
                    onChange={(e) => {
                      const aux = { ...values };
                      aux.games[index].name = e.target.value;
                      setValues(aux);
                      if (e.target.value === "") setSelectedOption(false);
                      else handleSelectedOption();
                    }}
                    value={values.games[index].name}
                    style={{
                      width: "300px",
                      backgroundColor: "#ededed",
                    }}
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
                          aux.games[index].state = e.target.value;
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
                          aux.games[index].state = e.target.value;
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
                  <h1>Tem o box original?</h1>
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
                          aux.games[index].box = false;
                          aux.games[index].boxInputed = true;
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
                          aux.games[index].box = true;
                          aux.games[index].boxInputed = true;
                          setValues(aux);
                          handleSelectedOption();
                        }}
                      />
                      <label htmlFor="sim">Sim</label>
                    </div>
                  </div>
                </form>
                {videogame ? (
                  <></>
                ) : (
                  <div>
                    <h1>De qual console?</h1>
                    <Input
                      label="Nome do Console"
                      type="text"
                      onChange={(e) => {
                        const aux = { ...values };
                        aux.games[index].console = e.target.value;
                        setValues(aux);
                        if (e.target.value === "") setSelectedOption(false);
                        else handleSelectedOption();
                      }}
                      value={values.games[index].console}
                      style={{
                        width: "300px",
                        backgroundColor: "#ededed",
                      }}
                      small
                    />
                  </div>
                )}
              </GameContainer>
            );
          })}
        </GamesContainer>
        {innerDisplay === 1 && (
          <ButtonsContainer buttons={values.games.length}>
            {values.games.length > 1 ? (
              <AddRemoveButton
                onClick={() => {
                  const auxValues = { ...values };
                  auxValues.games.pop();
                  setValues(auxValues);
                  handleSelectedOption();
                }}
              >
                <AiFillMinusCircle />
                <h1>Remover jogo</h1>
              </AddRemoveButton>
            ) : (
              <></>
            )}
            <AddRemoveButton
              onClick={() => {
                const auxValues = { ...values };
                auxValues.games.push({
                  name: "",
                  state: "",
                  box: false,
                  console: videogame ? videogame : "",
                });
                setValues(auxValues);
                setSelectedOption(false);
              }}
            >
              <AiFillPlusCircle />
              <h1>Adicionar jogo</h1>
            </AddRemoveButton>
          </ButtonsContainer>
        )}
      </InnerDisplay>
      <Buttons setDisplay={setDisplay} selectedOption={selectedOption} />
    </Container>
  );
}
