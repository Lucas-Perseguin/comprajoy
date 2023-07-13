import { useContext, useEffect, useState } from "react";
import Dropdown from "../../Form/Dropdown/Dropdown";
import { Display } from "../../Form/Display";
import Conservation from "../../Form/Conservation/Conservation";
import Controls from "../../Form/Controls/Controls";
import Cables from "../../Form/Cables/Cables";
import Box from "../../Form/Box/Box";
import GamesForm from "../../Form/GamesForm/GamesForm";
import Categories from "../../Form/Categories/Categories";
import Send from "../../Form/Send/Send";
import UserDataForm from "../../Form/UserDataForm/UserDataform";
import ProgressBar from "../../ProgressBar";
import Buttons from "../../Form/Buttons/Buttons";
import { Container } from "../style";
import { GlobalContext } from "../../../App";
import { FirstPageContainer } from "./style";

export default function Consoles({ choice /* , token  */ }) {
  const {
    values: [values, setValues],
    extra: [extra, setExtra],
    userData: [userData, setUserData],
  } = useContext(GlobalContext);
  const [display, setDisplay] = useState(0);
  const [selectedOption, setSelectedOption] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState(0);
  const [reRender, setReRender] = useState(0);

  useEffect(() => {
    if (values.console && values.state && values.box !== "")
      return setSelectedOption(true);
  }, [values]);

  useEffect(() => {
    setSelectedOption(false);
    setCategoriesSelected(0);
    setDisplay(0);
    setReRender((prev) => prev + 1);
  }, [choice]);

  return (
    <Container key={reRender}>
      <Display display={display === 0}>
        <FirstPageContainer hdScreen={"900px"} mobileScreen={"720px"}>
          <Dropdown
            brand={choice}
            values={values}
            setValues={setValues}
            isConsoleMain={true}
          />
          <Conservation values={values} setValues={setValues} />
          <Box values={values} setValues={setValues} />
          <Buttons
            setDisplay={setDisplay}
            selectedOption={selectedOption}
            single
          />
        </FirstPageContainer>
      </Display>
      <Display display={display === 1}>
        <Controls
          display={display}
          values={values}
          setValues={setValues}
          setDisplay={setDisplay}
        />
      </Display>
      <Display display={display === 2}>
        <Cables values={values} setValues={setValues} setDisplay={setDisplay} />
      </Display>
      <Display display={display === 3}>
        <GamesForm
          values={values}
          setValues={setValues}
          setDisplay={setDisplay}
          videogame={values.console}
        />
      </Display>
      <Display display={display === 4}>
        <Categories
          setDisplay={setDisplay}
          extra={extra}
          setExtra={setExtra}
          categoriesSelected={categoriesSelected}
          setCategoriesSelected={setCategoriesSelected}
        />
      </Display>
      <Display display={display === 5}>
        <UserDataForm
          setDisplay={setDisplay}
          setUserData={setUserData}
          userData={userData}
        />
      </Display>
      <Display display={display === 6}>
        <Send
          values={values}
          setDisplay={setDisplay}
          userData={userData}
          extra={extra}
        />
      </Display>

      <ProgressBar display={display} total={7} />
    </Container>
  );
}
