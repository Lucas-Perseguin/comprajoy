import { useState } from "react";
import { Radio } from "../../Radio";
import { Container, Question } from "./style";

export default function Box({ values, setValues }) {
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <Container>
      <Question>
        <h1>
          <bold>Seu videogame vem na caixa original?</bold>
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
              id="sim"
              name="console_state"
              value={true}
              onChange={(e) => {
                const aux = { ...values };
                aux.box = true;
                setValues(aux);
                if (!selectedOption) setSelectedOption(true);
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
                const aux = { ...values };
                aux.box = false;
                setValues(aux);
                if (!selectedOption) setSelectedOption(true);
              }}
            />
            <label htmlFor="nao">Não</label>
          </div>
        </form>
      </Question>
    </Container>
  );
}
