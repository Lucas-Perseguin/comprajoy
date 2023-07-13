import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - (120px + 60px));
  min-height: calc(100svh - (120px + 60px));
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgb(85, 35, 103);
`;

export const TermModal = styled.div`
  margin-top: 300px;
  display: flex;
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  position: relative;
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
    margin-top: 200px;

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
    margin-top: 90px;

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

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  border-radius: 75px;
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
