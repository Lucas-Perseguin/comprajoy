import styled from "styled-components";

export const TermModal = styled.div`
  display: ${(props) => (props.openModal ? "flex" : "none")};
  position: absolute;
  z-index: 1000000000;
  width: 80%;
  height: 900px;
  max-height: 80%;
  box-sizing: border-box;
  top: calc(50% - 450px);
  left: 10%;
  background-color: white;
  border-radius: 75px;
  padding: 150px 40px 40px;

  .react-icons {
    position: absolute;
    top: 40px;
    right: 40px;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }

  img {
    position: absolute;
    top: -218px;
    left: calc(50% - 175px);
    width: 350px;
    aspect-ratio: 1100/1204;
  }

  @media only screen and (max-width: 1500px) {
    padding: 100px 15px 15px;
    border-radius: 50px;
    width: 80%;
    left: 10%;
    top: 25%;
    height: 50%;

    .react-icons {
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
    }

    img {
      top: -150px;
      left: calc(50% - 120px);
      width: 240px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 100px 15px 15px;
    border-radius: 20px;
    width: 90%;
    left: 5%;
    top: 20%;
    height: 60%;

    .react-icons {
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
    }

    img {
      top: -60px;
      left: calc(50% - 70px);
      width: 140px;
    }
  }
`;

export const Fill = styled.div`
  display: ${(props) => (props.openModal ? "block" : "none")};
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(200, 200, 200, 0.4);
  z-index: 10000000;
  top: 0;
  left: 0;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  border-radius: 75px;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 100px 100px 40px;
  font-size: 26px;

  ol,
  li {
    list-style-position: inside;
  }

  ol {
    list-style-type: decimal;
  }

  h4 {
    font-size: 34px;
  }

  @media only screen and (max-width: 1500px) {
    padding: 80px 80px 40px;
    border-radius: 50px;
    font-size: 22px;

    h4 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    text-align: start;

    h1 {
      width: 100%;
      text-align: start;
    }

    h4 {
      font-size: 22px;
    }
  }
`;
