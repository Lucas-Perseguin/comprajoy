import Games from "../../Components/Choices/Games/Games";
import Accessories from "../../Components/Choices/Accessories/Accessories";
import { useParams } from "react-router-dom";
import { Banner, Container } from "./style.js";
import Consoles from "../../Components/Choices/Consoles/Consoles";
/* import getToken from "../../services/getToken"; */
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import { ReactComponent as Playstation } from "../../assets/images/playstationSecundario.svg";
import { ReactComponent as Xbox } from "../../assets/images/xboxSecundario.svg";
import { ReactComponent as Nintendo } from "../../assets/images/nintendoSecundario.svg";
import { ReactComponent as Retros } from "../../assets/images/retrosSecundario.svg";
import { ReactComponent as Jogos } from "../../assets/images/jogosSecundario.svg";
import { ReactComponent as Acessorios } from "../../assets/images/acessoriosSecundario.svg";

import bannerAcessorios from "../../assets/images/banners/ACESSORIOS.jpg";
import bannerJogos from "../../assets/images/banners/JOGOS.jpg";
import bannerNintendo from "../../assets/images/banners/NINTENDO.jpg";
import bannerPlaystation from "../../assets/images/banners/PLAYSTATION.jpg";
import bannerRetros from "../../assets/images/banners/RETROS.jpg";
import bannerXbox from "../../assets/images/banners/XBOX.jpg";

export default function Form() {
  const { choice } = useParams();
  const {
    param: [param, setParam],
    banner: [banner, setBanner],
  } = useContext(GlobalContext);
  const [image, setImage] = useState();

  useEffect(() => {
    setParam(choice);
    switch (choice) {
      case "Playstation":
        setImage(<Playstation />);
        if (!banner) {
          setBanner(bannerPlaystation);
        }
        break;
      case "Xbox":
        setImage(<Xbox />);
        if (!banner) {
          setBanner(bannerXbox);
        }
        break;
      case "Nintendo":
        setImage(<Nintendo />);
        if (!banner) {
          setBanner(bannerNintendo);
        }
        break;
      case "Retro":
        setImage(<Retros />);
        if (!banner) {
          setBanner(bannerRetros);
        }
        break;
      case "Jogos":
        setImage(<Jogos />);
        if (!banner) {
          setBanner(bannerJogos);
        }
        break;
      case "Acessorios":
        setImage(<Acessorios />);
        if (!banner) {
          setBanner(bannerAcessorios);
        }
        break;
      default:
        break;
    }
  }, [choice]);
  /* const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getToken());
  }, []); */

  return (
    <Container>
      <Banner banner={banner}>{image}</Banner>
      {choice === "Xbox" ||
      choice === "Playstation" ||
      choice === "Nintendo" ||
      choice === "Retro" ? (
        <Consoles choice={choice} /* token={token}  */ />
      ) : choice === "Jogos" ? (
        <Games /* token={token} */ />
      ) : choice === "Acessorios" ? (
        <Accessories />
      ) : (
        <h1>
          <bold>Erro 404</bold> Página não encontrada
        </h1>
      )}
    </Container>
  );
}
