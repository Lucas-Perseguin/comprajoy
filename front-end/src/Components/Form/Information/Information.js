import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { Container } from "./style";

export default function Information({
  values,
  setValues,
  setDisplay,
  accessories = false,
}) {
  const [text, setText] = useState("");

  return (
    <Container>
      <h1>
        <bold>
          {accessories
            ? "Caso queira fale mais sobre seus acessórios"
            : "Caso queira, fale mais sobre seu console, jogos, etc..."}
        </bold>
      </h1>
      <textarea
        value={text}
        onChange={(e) => {
          const aux = { ...values };
          aux.other = e.target.value;
          setValues(aux);
          setText(e.target.value);
        }}
      />
      <Buttons setDisplay={setDisplay} />
    </Container>
  );
}
