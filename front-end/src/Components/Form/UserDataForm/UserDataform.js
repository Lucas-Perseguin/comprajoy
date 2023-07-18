import { useEffect, useState } from "react";
import Input from "../../UserForms/Input";
import { Button, Buttons } from "./style";
import { toast } from "react-toastify";
import { Container } from "../../Container";

export default function UserDataForm({ setDisplay, setUserData, userData }) {
  const [cellphone, setCellphone] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const localData = JSON.parse(localStorage.getItem("userData"));
      setCellphone(localData.cellphone);
      setName(localData.name);
      setEmail(localData.email);
      setCity(localData.city);
      setSurname(localData.surname);
    }
  }, []);

  function isValidEmail(value) {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  return (
    <Container height={"1200px"} hdScreen={"900px"} mobileScreen={"760px"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>
          <bold>Seus dados pessoais para contato</bold>
        </h1>
        <Input
          label="Nome"
          type="text"
          placeholder="Seu primeiro nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
          style={{ width: "640px" }}
        />
        <Input
          label="Sobrenome"
          type="text"
          placeholder="Seu sobrenome"
          onChange={(e) => setSurname(e.target.value)}
          value={surname || ""}
          style={{ width: "640px" }}
        />
        <Input
          label="E-Mail"
          name="email"
          type="text"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "640px" }}
        />
        <Input
          label="Telefone"
          mask={cellphone.length < 15 ? "(99) 9999-99999" : "(99) 99999-9999"}
          name="cellphone"
          value={cellphone || ""}
          onChange={(e) => setCellphone(e.target.value)}
          style={{ width: "640px" }}
          color="secondary"
        />
        <Input
          label="Cidade"
          name="city"
          type="text"
          value={city || ""}
          onChange={(e) => setCity(e.target.value)}
          style={{ width: "640px" }}
        />
      </div>
      <Buttons>
        <Button onClick={() => setDisplay((prev) => prev - 1)}>Voltar</Button>
        <Button
          onClick={() => {
            if (!isValidEmail(email) || !parseInt(cellphone.length, 10) >= 13)
              return toast.error("Valores Inválidos!");

            if (!(email && city && name && cellphone && surname)) {
              return toast.error("Todos os valores devem estar preenchidos");
            }
            setUserData({ name, surname, cellphone, email, city });
            localStorage.setItem(
              "userData",
              JSON.stringify({ name, surname, cellphone, email, city })
            );
            setDisplay((prev) => prev + 1);
          }}
        >
          Continuar
        </Button>
      </Buttons>
    </Container>
  );
}
