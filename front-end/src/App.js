import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage.js";
import "./Styles/reset.css";
import Form from "./Pages/Form/Form.js";
import LayoutDefault from "./Components/Layout/Layout.js";
import { IconContext } from "react-icons/lib";
import { ToastContainer } from "react-toastify";

import "./assets/fonts/Amelia-Basic.ttf";
import "./assets/fonts/Amelia-Basic-Black.ttf";
import "./assets/fonts/Amelia-Basic-BlackItalic.ttf";
import "./assets/fonts/Amelia-Basic-Bold.ttf";
import "./assets/fonts/Amelia-Basic-BoldItalic.ttf";
import "./assets/fonts/Amelia-Basic-Italic.ttf";
import "./assets/fonts/Amelia-Basic-Light.ttf";
import "./assets/fonts/Amelia-Basic-LightItalic.ttf";
import "./assets/fonts/Amelia-Basic-Oblicua.ttf";
import "./assets/fonts/Amelia-Basic-Oblicua-Light.ttf";
import "./assets/fonts/Amelia-Basic-OblicuaBlack.ttf";
import "./assets/fonts/Amelia-Basic-OblicuaBold.ttf";
import useGlobal from "./hooks/useGlobal.js";
import Terms from "./Pages/Terms/Terms.js";

export const GlobalContext = React.createContext();

function App() {
  const global = useGlobal();
  const {
    userData: [userData, setUserData],
    setInitialValues,
  } = global;

  useEffect(() => {
    setInitialValues(
      window.location.pathname !== "/" ? window.location.pathname : ""
    );
    if (localStorage.getItem("userData")) {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer position="top-left" />
      <IconContext.Provider value={{ className: "react-icons" }}>
        <GlobalContext.Provider value={global}>
          <LayoutDefault>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/Form/:choice" element={<Form />} />
              <Route path="/Termos" element={<Terms />} />
            </Routes>
          </LayoutDefault>
        </GlobalContext.Provider>
      </IconContext.Provider>
    </BrowserRouter>
  );
}

export default App;
