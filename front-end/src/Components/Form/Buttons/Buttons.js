import { Button, Container } from "./style";

export default function Buttons({
  single = false,
  setDisplay,
  selectedOption = true,
  brand = "",
  display = "",
}) {
  return (
    <Container single={single} selectedOption={selectedOption}>
      {single ? (
        <></>
      ) : (
        <Button
          onClick={() => {
            if (brand === "Retro" && display === 4)
              return setDisplay((prev) => prev - 2);
            setDisplay((prev) => prev - 1);
          }}
        >
          Voltar
        </Button>
      )}
      {selectedOption ? (
        <Button
          onClick={() => {
            if (brand === "Retro" && display === 2)
              return setDisplay((prev) => prev + 2);
            setDisplay((prev) => prev + 1);
          }}
        >
          Continuar
        </Button>
      ) : (
        <></>
      )}
    </Container>
  );
}
