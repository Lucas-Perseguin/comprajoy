import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { Display } from "../Display";
import { Radio } from "../../Radio";
import { Checkbox, CheckboxContainer } from "./style";
import { Container } from "../../Container";

export default function Cables({ values, setValues, setDisplay }) {
  const [selectedOption, setSelectedOption] = useState(false);
  const [innerDisplay, setInnerDisplay] = useState(0);
  const [hdmi, setHdmi] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [controlCable, setControlCable] = useState(false);

  return (
    <Container
      height={"800px"}
      open={innerDisplay === 1 ? "1100px" : false}
      hdScreen={"400px"}
      openHd={"850px"}
      mobileScreen={"500px"}
      openMobile={"720px"}
    >
      <div>
        <h1>
          <bold>Acompanha os cabos originais?</bold>
        </h1>
        <form>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Radio
              type="radio"
              id="sim"
              name="console_state"
              value={true}
              onChange={(e) => {
                if (!selectedOption) setSelectedOption(true);
                setInnerDisplay(1);
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
                setInnerDisplay(0);
              }}
            />
            <label htmlFor="nao">Não</label>
          </div>
        </form>
      </div>
      <Display display={innerDisplay === 1}>
        <h1
          style={{
            marginBottom: "10px",
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <bold>Quais desses cabos vão junto com o videogame?</bold>
        </h1>
        <CheckboxContainer>
          <Checkbox>
            <input
              type="checkbox"
              checked={hdmi}
              onChange={() => {
                const aux = { ...values };
                aux.hdmi = !hdmi;
                setValues(aux);
                setHdmi((prev) => !prev);
              }}
            />
            <h1>HDMI</h1>
          </Checkbox>
          <Checkbox>
            <input
              type="checkbox"
              checked={energy}
              onChange={() => {
                const aux = { ...values };
                aux.energy = !energy;
                setValues(aux);
                setEnergy((prev) => !prev);
              }}
            />
            <h1>Energia</h1>
          </Checkbox>
          <Checkbox>
            <input
              type="checkbox"
              checked={controlCable}
              onChange={() => {
                const aux = { ...values };
                aux.controls.cable = !controlCable;
                setValues(aux);
                setControlCable((prev) => !prev);
              }}
            />
            <h1>USB (controle)</h1>
          </Checkbox>
        </CheckboxContainer>
      </Display>
      <Buttons setDisplay={setDisplay} selectedOption={selectedOption} />
    </Container>
  );
}
