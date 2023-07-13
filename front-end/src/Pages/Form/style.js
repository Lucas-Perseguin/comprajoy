import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  font-size: 34px;
  color: #552367;

  form {
    margin-top: 20px;
    justify-content: center;
    gap: 40px;

    label {
      margin-top: 3px;
    }
  }

  textarea {
    border: 2px solid #552367;
    background-color: #e5e5e5;
    border-radius: 40px;
    box-sizing: border-box;
    padding: 20px;
    font-size: 20px;
  }

  @media only screen and (max-width: 1500px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

export const Banner = styled.div`
  box-shadow: inset 0px 0px 25px 5px rgba(0, 0, 0, 0.33);
  width: 100%;
  aspect-ratio: 1920/600;
  background-image: url(${(props) => props.banner});
  background-size: cover;
  position: relative;
  svg {
    width: 500px;
    filter: drop-shadow(0px 19px 30px rgba(0, 0, 0, 0.05));
    position: absolute;
    bottom: -365px;
    left: calc(50% - 250px);
  }
  @media only screen and (max-width: 1500px) {
    svg {
      width: 280px;
      left: calc(50% - 140px);
      bottom: -190px;
    }
  }
  @media only screen and (max-width: 1000px) {
    svg {
      width: 200px;
      left: calc(50% - 100px);
      bottom: -150px;
    }
  }
`;
