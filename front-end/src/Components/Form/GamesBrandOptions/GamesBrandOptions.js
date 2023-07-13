import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Option, Options } from "../Categories/style";
import { Container } from "../../Container";

export default function GamesBrandOptions({
  data,
  setData,
  accessories = false,
}) {
  const [brand, setBrand] = useState("");
  const [selectedOption, setSelectedOption] = useState(false);

  function handleSelection(chosenBrand) {
    setBrand(chosenBrand);
    setSelectedOption(true);
    const aux = { ...data };
    aux.console = "";
    setData(aux);
  }

  return (
    <Container
      height={"750px"}
      hdScreen={"400px"}
      openHd={"900px"}
      open={selectedOption ? "1000px" : false}
      openMobile={selectedOption ? "600px" : false}
    >
      <h1 style={{ marginBottom: "10px", textAlign: "center" }}>
        <bold>
          Os seus {accessories ? "acessórios" : "jogos"} são de qual categoria?
        </bold>
      </h1>
      <Options style={{ marginBottom: "40px" }} display={true}>
        <Option
          onClick={() => handleSelection("Playstation")}
          selected={brand === "Playstation"}
        >
          <h1>Playstation</h1>
        </Option>
        <Option
          onClick={() => handleSelection("Xbox")}
          selected={brand === "Xbox"}
        >
          <h1>Xbox</h1>
        </Option>
        <Option
          onClick={() => handleSelection("Nintendo")}
          selected={brand === "Nintendo"}
        >
          <h1>Nintendo</h1>
        </Option>
        <Option
          onClick={() => handleSelection("Retro")}
          selected={brand === "Retro"}
        >
          <h1>Retro</h1>
        </Option>
      </Options>
      {selectedOption && (
        <Dropdown values={data} setValues={setData} brand={brand} small />
      )}
    </Container>
  );
}
