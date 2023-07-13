import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Radio } from "../../Radio";
import { Hidden } from "../Conservation/style";
import { Container } from "../../Container";

export default function Controls({
  values,
  setValues,
  setDisplay = false,
  brand,
  display = false,
  small = false,
}) {
  const [selectedOption, setSelectedOption] = useState(true);
  const [amount, setAmount] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Container
      height={small ? "200px" : "750px"}
      open={!small && amount > 0 ? "1000px" : false}
      small={small}
      hdScreen={"400px"}
      openHd={"750px"}
      smallHd={"200px"}
      smallOpenHd={"400px"}
      mobileScreen={"400px"}
      openMobile={"620px"}
      smallMobile={"150px"}
    >
      <h1 style={{ marginBottom: "20px" }}>
        <bold>Acompanha quantos controles?</bold>
      </h1>
      <div
        style={{
          display: "flex",
          marginBottom: small ? "20px" : "80px",
          gap: "4px",
        }}
      >
        <div>
          <AiOutlineMinus
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (values.controls.amount === 0) return;
              if (values.controls.amount === 1 && !selectedOption)
                setSelectedOption(true);
              const aux = { ...values };
              aux.controls.amount--;
              setValues(aux);
              setAmount((prev) => prev - 1);
            }}
          />
        </div>
        <div>{amount}</div>
        <div>
          <AiOutlinePlus
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (values.controls.amount === 0) setSelectedOption(false);
              const aux = { ...values };
              aux.controls.amount++;
              setValues(aux);
              setAmount((prev) => prev + 1);
            }}
          />
        </div>
      </div>
      {amount !== 0 ? (
        <>
          <h1>
            <bold>Seus controles são originais?</bold>
          </h1>
          <form>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Radio
                type="radio"
                id="sim"
                name="console_state"
                value={true}
                onChange={(e) => {
                  const aux = { ...values };
                  aux.controls.original = true;
                  setValues(aux);
                  if (!selectedOption) setSelectedOption(true);
                }}
              />
              <label htmlFor="sim">Sim</label>
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
                id="nao"
                name="console_state"
                value={false}
                onChange={(e) => {
                  const aux = { ...values };
                  aux.controls.original = false;
                  setValues(aux);
                  if (!selectedOption) setSelectedOption(true);
                }}
              />
              <label htmlFor="nao">Não</label>
              {isHovering && (
                <Hidden simple>
                  <h2>
                    *Compramos apenas controles <bold>originais</bold>
                  </h2>
                </Hidden>
              )}
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
      {!small && (
        <Buttons
          setDisplay={setDisplay}
          selectedOption={selectedOption}
          brand={brand}
          display={display}
        />
      )}
    </Container>
  );
}
