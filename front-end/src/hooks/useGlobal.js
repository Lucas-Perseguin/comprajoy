import { useState } from "react";

export default function useGlobal() {
  const [values, setValues] = useState({
    console: false,
    box: "",
    state: false,
    energy: false,
    hdmi: false,
    controls: { amount: 0, original: false, cable: false },
    games: [{ name: "", state: "", box: false, console: "" }],
    other: false,
    accessories: [{ name: "", brand: "", state: "", box: false }],
  });

  const [banner, setBanner] = useState();

  const [extra, setExtra] = useState({
    console: false,
    state: false,
    controls: { amount: 0, original: false },
    other: false,
    toSell: "",
    accessories: false,
  });

  const [userData, setUserData] = useState({
    name: "",
    cellphone: "",
    email: "",
    city: "",
  });

  const [param, setParam] = useState(
    window.location.pathname !== "/"
      ? window.location.pathname.replace("/Form/", "")
      : ""
  );

  function setInitialValues(pathname = "") {
    setValues({
      console: false,
      box: "",
      state: false,
      energy: false,
      hdmi: false,
      controls: { amount: 0, original: false, cable: false },
      games: [
        { name: "", state: "", box: false, console: "", boxInputed: false },
      ],
      other: false,
      accessories: [
        { name: "", brand: "", state: "", box: false, boxInputed: false },
      ],
    });

    setExtra({
      console: false,
      state: false,
      controls: { amount: 0, original: false },
      other: false,
      toSell: "",
      accessories: false,
    });

    setParam(pathname ? pathname.replace("/Form/", "") : "");
  }

  return {
    values: [values, setValues],
    extra: [extra, setExtra],
    userData: [userData, setUserData],
    param: [param, setParam],
    banner: [banner, setBanner],
    setInitialValues,
  };
}
