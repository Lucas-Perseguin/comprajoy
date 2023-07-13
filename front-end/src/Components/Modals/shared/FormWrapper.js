import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  width: 400px;
  height: ${(props) => (props.isLogin ? "200px" : "600px")};
  overflow-y: ${(props) => (props.isLogin ? "hidden" : "scroll")};
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid white;
  border-radius: 20px;
  gap: 5px;
  padding: 20px 0;
  > div {
    width: 380px;
  }
  @media (max-width: 640px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
    width: 90% !important;
  }
`;
