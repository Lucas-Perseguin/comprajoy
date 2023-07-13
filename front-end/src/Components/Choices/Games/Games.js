import { useContext, useEffect, useState } from "react";
import { Display } from "../../Form/Display";
import GamesForm from "../../Form/GamesForm/GamesForm";
import Send from "../../Form/Send/Send";
import ProgressBar from "../../ProgressBar";
import UserDataForm from "../../Form/UserDataForm/UserDataform";
import Categories from "../../Form/Categories/Categories";
import GamesBrandOptions from "../../Form/GamesBrandOptions/GamesBrandOptions";
import Buttons from "../../Form/Buttons/Buttons";
import { Container } from "../style";
import { GlobalContext } from "../../../App";

export default function Games(/* { token } */) {
  const {
    values: [values, setValues],
    extra: [extra, setExtra],
    userData: [userData, setUserData],
  } = useContext(GlobalContext);
  const [display, setDisplay] = useState(0);
  const [data, setData] = useState({ console: "" });
  const [extraGames, setExtraGames] = useState({
    games: [
      { name: "", state: "", box: false, console: "", boxInputed: false },
    ],
  });
  const [selectedOption, setSelectedOption] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState(0);

  useEffect(() => {
    if (data.console) return setSelectedOption(true);
    else return setSelectedOption(false);
  }, [data]);

  return (
    <Container>
      <Display display={display === 0}>
        <GamesBrandOptions
          data={data}
          setData={setData}
          setDisplay={setDisplay}
        />
        <Buttons
          setDisplay={setDisplay}
          selectedOption={selectedOption}
          single
        />
      </Display>
      <Display display={display === 1}>
        <GamesForm
          values={values}
          setValues={setValues}
          display={display}
          setDisplay={setDisplay}
          page
          videogame={data.console}
        />
      </Display>
      <Display display={display === 2}>
        <GamesForm
          values={extraGames}
          setValues={setExtraGames}
          display={display}
          setDisplay={setDisplay}
          secondary
        />
      </Display>
      <Display display={display === 3}>
        <Categories
          setDisplay={setDisplay}
          extra={extra}
          setExtra={setExtra}
          categoriesSelected={categoriesSelected}
          setCategoriesSelected={setCategoriesSelected}
        />
      </Display>
      <Display display={display === 4}>
        <UserDataForm
          setDisplay={setDisplay}
          setUserData={setUserData}
          userData={userData}
        />
      </Display>
      <Display display={display === 5}>
        <Send
          values={values}
          setDisplay={setDisplay}
          userData={userData}
          extra={extra}
          extraGames={extraGames}
        />
      </Display>

      <ProgressBar display={display} total={6} />
    </Container>
  );
}
