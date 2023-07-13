import { useState } from "react";
import { Container, Hidden } from "./style";
import { Radio } from "../../Radio";

export default function Conservation({
  values,
  setValues,
  simple = false,
  extra = false,
}) {
  const [selectedOption, setSelectedOption] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Container simple={simple}>
      <h1>
        <bold>Qual é o estado de conservação?</bold>
      </h1>
      <form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Radio
            type="radio"
            id="novo"
            name="console_state"
            value="Novo"
            onChange={(e) => {
              const aux = { ...values };
              aux.state = e.target.value;
              setValues(aux);
              if (!selectedOption) setSelectedOption(true);
            }}
          />
          <label htmlFor="novo">Novo</label>
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Radio
            type="radio"
            id="usado"
            name="console_state"
            value="Usado"
            onChange={(e) => {
              const aux = { ...values };
              aux.state = e.target.value;
              setValues(aux);
              if (!selectedOption) setSelectedOption(true);
            }}
          />
          <label htmlFor="usado">Usado</label>
          {isHovering && (
            <Hidden>
              <h2>
                *Compramos apenas games usados em <bold>perfeito</bold> estado
                de funcionamento
              </h2>
            </Hidden>
          )}
        </div>
      </form>
    </Container>
  );
}
