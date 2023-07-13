import styled from "styled-components";

export const Radio = styled.input`
  appearance: none;
  /* Safari support */
  -webkit-appearance: none;
  border: 0.2rem solid #fff;
  background-color: #ededed;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin-right: 0.5rem;
  outline: 1px solid #ededed;

  :hover {
    outline-color: #552367;
  }

  :focus-visible {
    outline-offset: 0;
  }

  :checked {
    outline-color: #552367;
    background-color: #552367;
  }

  @media only screen and (max-width: 1500px) {
    width: 2.5em;
    height: 2.5em;
  }
  @media only screen and (max-width: 640px) {
    width: 2.5em;
    height: 2.5em;
  }
`;
