import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Text,
} from "./style";

export default function Dropdown({
  brand,
  values,
  setValues,
  small = false,
  simple = false,
  isConsoleMain = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options =
    brand === "Playstation"
      ? [
          "Playstation 5",
          "Playstation 4 Pro",
          "Playstation 4 Slim",
          "Playstation 4 Fat",
          "Playstation 3 Super Slim",
          "Playstation 3 Slim",
          "Playstation 3 Fat",
          "Playstation 2 Slim",
          "Playstation 2 Fat",
          "Playstation 1 Slim",
          "Playstation 1 Fat",
        ]
      : brand === "Xbox"
      ? [
          "Xbox Series X",
          "Xbox Series S",
          "Xbox One X",
          "Xbox One S",
          "Xbox One All Digital",
          "Xbox One Fat",
          "Xbox 360 Super Slim",
          "Xbox 360 Slim",
          "Xbox 360",
        ]
      : brand === "Nintendo"
      ? [
          "Nintendo Switch Oled",
          "Nintendo Switch Lite",
          "Nintendo Switch",
          "Nintendo Wii U",
          "Nintendo Wii",
        ]
      : brand === "Retro" && [
          "Nintendo 3DS",
          "Nintendo DS",
          "Super Nintendo",
          "Nintendo 64",
          "Xbox Classic",
          "Ps Vita",
          "PSP",
          "Game Cube",
          "GameBoy Advance",
          "Atari",
          "Outro",
        ];

  const toggling = () => setIsOpen(!isOpen);

  function onOptionClicked(value) {
    setSelectedOption(value);
    setIsOpen(false);
    if (!simple) {
      setValues({
        ...values,
        console: value,
        games: [{ name: "", state: "", box: false, console: value }],
        accessories: [{ name: "", brand: value, state: "", box: false }],
      });
      console.log(values);
    } else {
      setValues({ ...values, console: value });
    }
  }

  useEffect(() => {
    setSelectedOption(null);
  }, [brand]);

  return (
    <>
      <Text>{`Selecione seu ${brand}`}</Text>
      <DropDownContainer brand={brand} simple={simple}>
        <DropDownHeader
          onClick={toggling}
          small={small}
          simple={simple}
          selectedOption={selectedOption}
        >
          <h1>{selectedOption || `${brand}`}</h1>
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList small isConsoleMain={isConsoleMain}>
              {options.map((option, index) => (
                <ListItem onClick={() => onOptionClicked(option)} key={index}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
}
