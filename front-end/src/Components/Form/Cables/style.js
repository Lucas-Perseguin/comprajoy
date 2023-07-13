import styled from "styled-components";

export const Checkbox = styled.form`
  display: flex;
  align-items: center;
  gap: 10px !important;

  h1 {
    margin-top: 5px;
  }
  input {
    width: ${(props) => (props.small ? "25px" : "45px")};
    height: ${(props) => (props.small ? "25px" : "45px")};
    cursor: pointer;

    :checked {
      accent-color: #552367;
    }
  }

  @media only screen and (max-width: 1500px) {
    input {
      width: ${(props) => (props.small ? "20px" : "35px")};
      height: ${(props) => (props.small ? "20px" : "35px")};
    }
  }
  @media only screen and (max-width: 1000px) {
    width: 300px;
    justify-content: flex-start !important;
    margin-bottom: 6px;
    h1 {
      font-size: ${(props) => (props.send ? "18px" : "")};
    }
    input {
      width: ${(props) => (props.small ? "25px" : "35px")};
      height: ${(props) => (props.small ? "25px" : "35px")};
    }
    @media only screen and (max-width: 500px) {
      h1 {
        text-align: start;
      }
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: flex-start;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;
