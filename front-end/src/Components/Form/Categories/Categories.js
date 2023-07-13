import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { Display } from "../Display";
import Dropdown from "../Dropdown/Dropdown";
import Controls from "../Controls/Controls";
import Conservation from "../Conservation/Conservation";
import {
  AccessoriesQuestion,
  CheckbooxContainer,
  Container,
  Option,
  Options,
  OptionsContainer,
} from "./style";
import { Checkbox } from "../Cables/style";
import { Radio } from "../../Radio";

export default function Categories({
  setDisplay,
  extra,
  setExtra,
  categoriesSelected,
  setCategoriesSelected,
}) {
  const [innerDisplay, setInnerDisplay] = useState(0);
  const [brand, setBrand] = useState("");
  const [videogame, setVideogame] = useState(false);
  const [controls, setControls] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [show, setShow] = useState(false);
  const [anySelected, setAnySelected] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  function handleSelection(selection, brand = "") {
    setInnerDisplay(selection);
    setBrand(brand);
    setExtra({
      console: false,
      state: false,
      controls: { amount: 0, original: false },
      other: false,
      toSell: "",
      accessories: false,
    });
    setShow(true);
    setVideogame(false);
    setControls(false);
    setAccessories(false);
    setAnySelected(false);
    if (selection === 2) setCategoriesSelected("other");
    else setCategoriesSelected(0);
  }

  function handleCheckboxSelection(selection) {
    let count = 0;
    if (videogame) count++;
    if (controls) count++;
    if (accessories) count++;
    if (selection) {
      setCategoriesSelected(count - 1);
    } else {
      setCategoriesSelected(count + 1);
    }
    if (count === 0) return setAnySelected(true);
    if (count === 1 && selection) return setAnySelected(false);
  }

  return (
    <Container
      selected={anySelected || categoriesSelected === "other"}
      optionSelected={optionSelected}
      isOther={categoriesSelected === "other"}
    >
      <h2 style={{ marginBottom: "10px" }}>
        <bold>Quer aproveitar para vender mais alguma coisa?</bold>
      </h2>
      <form style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Radio
            type="radio"
            id="sim"
            name="console_state"
            value={true}
            onChange={(e) => {
              if (!optionSelected) setOptionSelected(true);
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
              if (optionSelected) {
                setOptionSelected(false);
                setInnerDisplay(0);
                setBrand("");
                setShow(false);
              }
            }}
          />
          <label htmlFor="nao">Não</label>
        </div>
      </form>
      <Options display={optionSelected}>
        <Option
          onClick={() => handleSelection(1, "Playstation")}
          selected={brand === "Playstation"}
        >
          <h1>Playstation</h1>
        </Option>
        <Option
          onClick={() => handleSelection(1, "Xbox")}
          selected={brand === "Xbox"}
        >
          <h1>Xbox</h1>
        </Option>
        <Option
          onClick={() => handleSelection(1, "Nintendo")}
          selected={brand === "Nintendo"}
        >
          <h1>Nintendo</h1>
        </Option>
        <Option
          onClick={() => handleSelection(2)}
          selected={innerDisplay === 2}
        >
          <h1>Outros</h1>
        </Option>
      </Options>
      {show && (
        <>
          <Display display={innerDisplay === 1} style={{ marginTop: "-10px" }}>
            <OptionsContainer>
              <CheckbooxContainer>
                <Checkbox small style={{ marginBottom: "40px" }}>
                  <input
                    type="checkbox"
                    checked={videogame}
                    onChange={(e) => {
                      setVideogame((prev) => !prev);
                      handleCheckboxSelection(videogame);
                    }}
                  />
                  <h1>Console</h1>
                </Checkbox>
                {videogame && (
                  <>
                    <Dropdown
                      values={extra}
                      setValues={setExtra}
                      brand={brand}
                      simple
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Conservation
                        values={extra}
                        setValues={setExtra}
                        simple
                      />
                    </div>
                  </>
                )}
              </CheckbooxContainer>
              <CheckbooxContainer>
                <Checkbox small style={{ marginBottom: "40px" }}>
                  <input
                    type="checkbox"
                    checked={controls}
                    onChange={(e) => {
                      setControls((prev) => !prev);
                      handleCheckboxSelection(controls);
                    }}
                  />
                  <h1>Controles</h1>
                </Checkbox>
                {controls && (
                  <Controls values={extra} setValues={setExtra} small={true} />
                )}
              </CheckbooxContainer>
              <AccessoriesQuestion>
                <Checkbox small style={{ marginBottom: "40px" }}>
                  <input
                    type="checkbox"
                    checked={accessories}
                    onChange={(e) => {
                      setAccessories((prev) => !prev);
                      handleCheckboxSelection(accessories);
                    }}
                  />
                  <h1>Acessórios</h1>
                </Checkbox>
                {accessories && (
                  <div>
                    <h1>
                      <bold>Descreva seus acessórios</bold>
                    </h1>
                    <textarea
                      placeholder="Headset Pulse PS5"
                      style={{ marginTop: "20px" }}
                      onChange={(e) =>
                        setExtra({ ...extra, accessories: e.target.value })
                      }
                    />
                  </div>
                )}
              </AccessoriesQuestion>
            </OptionsContainer>
          </Display>
          <Display display={innerDisplay === 2}>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                alignItems: "center",
              }}
            >
              <h1>O que você quer vender?</h1>
              <textarea
                placeholder="Headset Pulse PS5"
                onChange={(e) => setExtra({ ...extra, toSell: e.target.value })}
                value={extra.toSell}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Conservation values={extra} setValues={setExtra} simple extra />
            </div>
          </Display>
        </>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          marginTop: "40px",
        }}
      >
        <h1>Caso queira fale mais sobre seu item</h1>
        <textarea
          placeholder="Console bem conservado, possui algumas marcas de uso"
          onChange={(e) => setExtra({ ...extra, other: e.target.value })}
        />
      </div>

      <Buttons setDisplay={setDisplay} />
    </Container>
  );
}
