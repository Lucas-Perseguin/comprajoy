import Carousel from "../../Components/Carousel";

import {
  Container,
  MainButtonsContainer,
  MainButton,
  TextImageContainer,
  Dinheiro,
  Background,
  PlusContainer,
  LoadImage,
} from "./style.js";

import { ReactComponent as Playstation } from "../../assets/images/playstation.svg";
import { ReactComponent as Xbox } from "../../assets/images/xbox.svg";
import { ReactComponent as Nintendo } from "../../assets/images/nintendo.svg";
import { ReactComponent as Retro } from "../../assets/images/retros.svg";
import { ReactComponent as Jogos } from "../../assets/images/jogos.svg";
import { ReactComponent as Acessorios } from "../../assets/images/acessorios.svg";
import { ReactComponent as Xxxx1 } from "../../assets/images/XXXX1.svg";
import { ReactComponent as Xxxx2 } from "../../assets/images/XXXX2.svg";

import bannerAcessorios from "../../assets/images/banners/ACESSORIOS.jpg";
import bannerJogos from "../../assets/images/banners/JOGOS.jpg";
import bannerNintendo from "../../assets/images/banners/NINTENDO.jpg";
import bannerPlaystation from "../../assets/images/banners/PLAYSTATION.jpg";
import bannerRetros from "../../assets/images/banners/RETROS.jpg";
import bannerXbox from "../../assets/images/banners/XBOX.jpg";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";

export function MainPage() {
  const navigate = useNavigate();
  const {
    param: [param, setParam],
    banner: [banner, setBanner],
  } = useContext(GlobalContext);

  useEffect(() => setParam(""));

  return (
    <Container>
      <LoadImage src={bannerAcessorios} />
      <LoadImage src={bannerJogos} />
      <LoadImage src={bannerNintendo} />
      <LoadImage src={bannerPlaystation} />
      <LoadImage src={bannerRetros} />
      <LoadImage src={bannerXbox} />
      <Carousel>
        <TextImageContainer>
          <Dinheiro onClick={(event) => event.stopPropagation()} />
          <Background />
          <h1>
            E aí, <bold>Gamer!</bold>
          </h1>
          <h2>
            o que vai <bold>vender?</bold>
          </h2>
        </TextImageContainer>
        <PlusContainer onClick={(event) => event.stopPropagation()}>
          <Xxxx1 />
          <Xxxx2 />
        </PlusContainer>
      </Carousel>

      <MainButtonsContainer>
        <MainButton
          onClick={() => {
            setBanner(bannerPlaystation);
            navigate("/Form/Playstation");
          }}
        >
          <Playstation />
        </MainButton>
        <MainButton
          onClick={() => {
            setBanner(bannerXbox);
            navigate("/Form/Xbox");
          }}
        >
          <Xbox />
        </MainButton>
        <MainButton
          onClick={() => {
            setBanner(bannerNintendo);
            navigate("/Form/Nintendo");
          }}
        >
          <Nintendo />
        </MainButton>
        <MainButton
          onClick={() => {
            setBanner(bannerRetros);
            navigate("/Form/Retro");
          }}
        >
          <Retro />
        </MainButton>
        <MainButton
          onClick={() => {
            setBanner(bannerJogos);
            navigate("/Form/Jogos");
          }}
        >
          <Jogos />
        </MainButton>
        <MainButton
          onClick={() => {
            setBanner(bannerAcessorios);
            navigate("/Form/Acessorios");
          }}
        >
          <Acessorios />
        </MainButton>
      </MainButtonsContainer>
    </Container>
  );
}
