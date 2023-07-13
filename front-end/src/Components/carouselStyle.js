import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  aspect-ratio: 192 / 60;
  width: 100%;
  box-shadow: inset 0px 0px 25px 5px rgba(0, 0, 0, 0.33);
  position: relative;
  background-image: url(${(props) => props.current});
  background-size: cover;
  z-index: 1000;
  cursor: ${(props) => (props.url ? "pointer" : "default")};

  .react-icons {
    position: absolute;
    height: 50px;
    width: 50px;
    top: calc(50% - 25px);
    box-sizing: border-box;
    padding-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    padding-bottom: 2px;
    cursor: pointer;
    color: white;

    :hover {
      transform: scale(1.2);
    }

    @media screen and (max-width: 1600px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 800px) {
      width: 25px;
      height: 25px;
      top: calc(50% - 15px);
    }
  }

  .leftArrow {
    left: 20px;

    @media screen and (max-width: 800px) {
      left: 4px;
    }
  }

  .rightArrow {
    right: 20px;

    @media screen and (max-width: 800px) {
      right: 4px;
    }
  }
`;
