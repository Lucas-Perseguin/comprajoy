import { useContext, useEffect, useState } from "react";
import { Display } from "../../Form/Display";
import GamesBrandOptions from "../../Form/GamesBrandOptions/GamesBrandOptions";
import UserDataForm from "../../Form/UserDataForm/UserDataform";
import Send from "../../Form/Send/Send";
import ProgressBar from "../../ProgressBar";
import Categories from "../../Form/Categories/Categories";
import AccessoriesForm from "../../Form/AccessoriesForm/AccessoriesForm";
import Buttons from "../../Form/Buttons/Buttons";
import { Container } from "../style";
import { GlobalContext } from "../../../App";

export default function Accessories() {
  const {
    values: [values, setValues],
    extra: [extra, setExtra],
    userData: [userData, setUserData],
  } = useContext(GlobalContext);
  const [display, setDisplay] = useState(0);
  const [selectedOption, setSelectedOption] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState(0);

  useEffect(() => {
    if (values.console) return setSelectedOption(true);
    else return setSelectedOption(false);
  }, [values]);

  return (
    <Container>
      <Display display={display === 0}>
        <GamesBrandOptions data={values} setData={setValues} accessories />
        <Buttons
          setDisplay={setDisplay}
          selectedOption={selectedOption}
          single
        />
      </Display>
      <Display display={display === 1}>
        <AccessoriesForm
          display={display}
          setDisplay={setDisplay}
          values={values}
          setValues={setValues}
        />
      </Display>
      <Display display={display === 2}>
        <Categories
          setDisplay={setDisplay}
          extra={extra}
          setExtra={setExtra}
          categoriesSelected={categoriesSelected}
          setCategoriesSelected={setCategoriesSelected}
        />
      </Display>
      <Display display={display === 3}>
        <UserDataForm
          setDisplay={setDisplay}
          setUserData={setUserData}
          userData={userData}
        />
      </Display>
      <Display display={display === 4}>
        <Send
          values={values}
          setDisplay={setDisplay}
          userData={userData}
          extra={extra}
        />
      </Display>

      <ProgressBar display={display} total={5} />
    </Container>
  );
}
