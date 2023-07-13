import { useState } from "react";
import useInterval from "use-interval";
import "../Styles/Carousel.css";
import banner1 from "../assets/images/banners/banner1.jpg";
import banner2 from "../assets/images/banners/banner2.jpg";
import banner3 from "../assets/images/banners/banner3.jpg";
import { CarouselContainer } from "./carouselStyle";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function Carousel({ children }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const images = [
    {
      image: banner1,
      title: "banner1",
      url: "https://mkt.mundojoygames.com.br/sobreajoy",
    },
    {
      image: banner2,
      title: "banner2",
    },
    {
      image: banner3,
      title: "banner3",
    },
  ];

  useInterval(() => slideRight(), autoPlay ? 3000 : null);

  const slideRight = (event) => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    event.stopPropagation();
  };

  const slideLeft = (event) => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    event.stopPropagation();
  };

  return (
    <CarouselContainer
      url={images[current].url}
      current={images[current].image}
      onMouseEnter={() => {
        setAutoPlay(false);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
      onClick={() => {
        if (images[current].url) {
          window.open(images[current].url, "_blank", "noreferrer");
        }
      }}
    >
      <IoIosArrowDropleftCircle className="leftArrow" onClick={slideRight} />
      <IoIosArrowDroprightCircle className="rightArrow" onClick={slideLeft} />
      <div className="carousel_pagination">
        {images.map((_, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          );
        })}
      </div>
      {children}
    </CarouselContainer>
  );
}

export default Carousel;
