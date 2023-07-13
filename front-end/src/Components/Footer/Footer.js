import { BsTelephoneFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";

import {
  LinksContainer,
  Text,
  Joystick,
  LinkContainer,
  Logo,
  ControleBranco,
  Seller,
  TermsAndInfos,
  Video,
} from "./style";

import footer from "../../assets/images/footer.png";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const {
    param: [param, setParam],
    setInitialValues,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(param ? false : true);
  }, [param]);

  return (
    <LinksContainer>
      {show && (
        <>
          <Text>
            <h1>
              Como <bold>vender?</bold>
            </h1>
            <h2>Assista ao vídeo abaixo</h2>
          </Text>
          <Joystick>
            <Video
              src="https://www.youtube.com/embed/w3-mj6ccSQI?controls=0&modestbranding=1&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></Video>
            <svg>
              <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <path d="M0.999,0.757 A0.16,0.226,0,0,1,0.954,0.935 A0.156,0.22,0,0,1,0.89,0.988 C0.831,1,0.777,0.997,0.732,0.936 C0.7,0.893,0.67,0.846,0.638,0.803 C0.621,0.779,0.6,0.764,0.575,0.764 Q0.5,0.765,0.424,0.764 C0.399,0.764,0.379,0.779,0.361,0.803 C0.33,0.846,0.299,0.891,0.268,0.935 C0.233,0.983,0.192,1,0.143,0.998 C0.07,0.991,0.006,0.905,0,0.798 C0,0.793,0,0.754,0,0.749 C0.004,0.689,0.007,0.629,0.011,0.569 C0.016,0.496,0.021,0.422,0.027,0.349 A0.273,0.385,0,0,1,0.105,0.123 C0.162,0.041,0.232,0.007,0.311,0.004 Q0.394,0,0.477,0 C0.539,0,0.601,0.002,0.663,0.003 C0.687,0.004,0.71,0.007,0.733,0.01 C0.811,0.023,0.872,0.079,0.92,0.165 C0.959,0.235,0.971,0.318,0.977,0.404 C0.981,0.447,0.983,0.49,0.986,0.532 C0.989,0.579,0.992,0.626,0.996,0.699 C0.997,0.713,0.999,0.743,0.999,0.757" />
              </clipPath>
            </svg>
          </Joystick>
        </>
      )}

      <TermsAndInfos>
        <a
          href="https://mkt.mundojoygames.com.br/sobreajoy"
          target={"_blank"}
          rel="noreferrer"
        >
          <LinkContainer>
            <ControleBranco />
            <h2>
              Sobre a <bold>Joy</bold>
            </h2>
          </LinkContainer>
        </a>
        <div
          onClick={() => {
            setInitialValues("/Termos");
            navigate("/Termos");
          }}
          style={{ cursor: "pointer" }}
        >
          <LinkContainer>
            <AiFillFileText />
            <h2>Termos e Condições</h2>
          </LinkContainer>
        </div>
      </TermsAndInfos>
      <Logo>
        <a
          href="https://www.mundojoygames.com.br/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={footer} alt={"Mundo Joy logo"} />
        </a>
      </Logo>
      <div>
        <a href="http://wa.me/5516991139401" rel="noreferrer" target={"_blank"}>
          <LinkContainer>
            <BsTelephoneFill />
            <h2>
              Fale com a <bold>Joy</bold>
            </h2>
          </LinkContainer>
        </a>
      </div>
      <Seller />
    </LinksContainer>
  );
}
