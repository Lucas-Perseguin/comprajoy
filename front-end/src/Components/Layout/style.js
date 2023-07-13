import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%; //100VH FOR FIXED HEADER
  /* display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: hidden; FOR FIXED HEADER*/
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  word-wrap: break-word;
`;

export { Container, Content };
