import styled from "styled-components";

export default function ProgressBar({ display, total }) {
  return (
    <Container total={total} display={display}>
      <h1>
        {display + 1}/{total}
      </h1>
      <div style={{ position: "relative" }}>
        <Background />
        <Progress display={display} total={total} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 200px);
  color: #552367;

  h1 {
    font-size: 26px;
    margin-left: ${(props) =>
      `calc(((400px / ${props.total}) * (${props.display})) - 8px)`};
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 1500px) {
    left: calc(50% - 150px);
    h1 {
      font-size: 22px;
      margin-left: ${(props) =>
        `calc((300px / ${props.total}) * (${props.display}))`};
    }
  }
`;

const Background = styled.div`
  width: 400px;
  height: 40px;
  background-color: lightgray;
  border-radius: 20px;

  @media only screen and (max-width: 1500px) {
    height: 35px;
    width: 300px;
  }
  @media only screen and (max-width: 1000px) {
    height: 30px;
  }
`;

const Progress = styled.div`
  width: ${(props) =>
    `calc((400px / ${props.total}) * (${props.display} + 1))`};
  position: absolute;
  background-color: #552367;
  height: 40px;
  top: 0;
  left: 0;
  border-radius: 20px;

  @media only screen and (max-width: 1500px) {
    height: 35px;
    width: 300px;
    width: ${(props) =>
      `calc((300px / ${props.total}) * (${props.display} + 1))`};
  }
  @media only screen and (max-width: 1000px) {
    height: 30px;
  }
`;
