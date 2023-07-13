import { useContext, useEffect, useState } from "react"; /* 
import { useEffect } from "react"; */
import UserModal from "../UserModal";
import {
  CategoriesContainer,
  Category,
  Container,
  MenuContainer,
  Logo,
  RetroIcon,
  AccessoriesIcon,
} from "./style";
import { HiMenu } from "react-icons/hi";
import { BsPlaystation, BsXbox, BsNintendoSwitch } from "react-icons/bs";
import { GiCompactDisc } from "react-icons/gi";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import iconRetro from "../../assets/images/iconRetro.png";
import iconRetroBranco from "../../assets/images/iconRetroBranco.png";
import iconAcessorios from "../../assets/images/iconAcessorios.png";
import iconAcessoriosBranco from "../../assets/images/iconAcessoriosBranco.png";

import bannerAcessorios from "../../assets/images/banners/ACESSORIOS.jpg";
import bannerJogos from "../../assets/images/banners/JOGOS.jpg";
import bannerNintendo from "../../assets/images/banners/NINTENDO.jpg";
import bannerPlaystation from "../../assets/images/banners/PLAYSTATION.jpg";
import bannerRetros from "../../assets/images/banners/RETROS.jpg";
import bannerXbox from "../../assets/images/banners/XBOX.jpg";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [displayCategories, setDisplayCategories] = useState(false);
  const {
    param: [param, setParam],
    banner: [banner, setBanner],
    setInitialValues,
  } = useContext(GlobalContext);

  /*For login and signup
   useEffect(() => {
    const token = localStorage.getItem("token");
    const path = window.location.pathname;
    if (!token && path === "/") {
      setOpenModal(true);
    }
  }, []); */

  useEffect(() => {
    const header = document.getElementById("header");
    header.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [param]);

  return (
    <>
      <Container id="header">
        <Logo
          src={logo}
          alt="Logo Compra Joy"
          onClick={() => {
            setBanner();
            setDisplayCategories(false);
            setInitialValues();
            navigate("/");
          }}
        />
        <MenuContainer
          onClick={() => {
            /* For login and singup
            const token = localStorage.getItem("token");
            if (!token) return setOpenModal(true); */
            setDisplayCategories((prev) => !prev);
          }}
        >
          <HiMenu />
        </MenuContainer>
        <CategoriesContainer display={displayCategories}>
          <Category
            onClick={() => {
              setBanner(bannerPlaystation);
              setDisplayCategories(false);
              setInitialValues("/Form/Playstation");
              navigate("/Form/Playstation");
            }}
            param={param}
            name="Playstation"
          >
            <BsPlaystation />
            <h1>Playstation</h1>
          </Category>
          <Category
            onClick={() => {
              setBanner(bannerXbox);
              setDisplayCategories(false);
              setInitialValues("/Form/Xbox");
              navigate("/Form/Xbox");
            }}
            param={param}
            name="Xbox"
          >
            <BsXbox />
            <h1>Xbox</h1>
          </Category>
          <Category
            onClick={() => {
              setBanner(bannerNintendo);
              setDisplayCategories(false);
              setInitialValues("/Form/Nintendo");
              navigate("/Form/Nintendo");
            }}
            param={param}
            name="Nintendo"
          >
            <BsNintendoSwitch />
            <h1>Nintendo</h1>
          </Category>
          <Category
            onClick={() => {
              setBanner(bannerRetros);
              setDisplayCategories(false);
              setInitialValues("/Form/Retro");
              navigate("/Form/Retro");
            }}
            param={param}
            name="Retro"
          >
            <RetroIcon
              src={param === "Retro" ? iconRetroBranco : iconRetro}
              alt="Icone Retro"
            />
            <h1>Retrôs</h1>
          </Category>
          <Category
            onClick={() => {
              setBanner(bannerAcessorios);
              setDisplayCategories(false);
              setInitialValues("/Form/Acessorios");
              navigate("/Form/Acessorios");
            }}
            param={param}
            name="Acessorios"
          >
            <AccessoriesIcon
              src={
                param === "Acessorios" ? iconAcessoriosBranco : iconAcessorios
              }
              alt="Icone Acessórios"
            />
            <h1>Acessórios</h1>
          </Category>
          <Category
            onClick={() => {
              setBanner(bannerJogos);
              setDisplayCategories(false);
              setInitialValues("/Form/Jogos");
              navigate("/Form/Jogos");
            }}
            param={param}
            name="Jogos"
          >
            <GiCompactDisc />
            <h1>Jogos</h1>
          </Category>
        </CategoriesContainer>
      </Container>
      {openModal ? <UserModal setOpenModal={setOpenModal} /> : <></>}
    </>
  );
}

/* For login and signup
  <MenuContainer
    onClick={() => {
      const token = localStorage.getItem("token");
      if (!token) setOpenModal(true);
    }}
  >
*/
