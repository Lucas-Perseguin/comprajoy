import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 500px;
  margin: 0 auto;

  @media only screen and (max-width: 1500px) {
    width: ${(props) => (props.simple ? "236px" : "350px")};
    ${(props) => (props.simple ? "margin-left: calc(50% - 157px)" : "")};
  }
  @media only screen and (max-width: 1000px) {
    width: ${(props) => (props.simple ? "236px" : "220px")};
    margin-left: calc(50% - 157px);
  }
`;

const DropDownHeader = styled("div")`
  width: 400px;
  height: 80px;
  margin-bottom: 0.4em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 30px;
  color: ${(props) =>
    props.selectedOption ? "#552367" : "rgba(160, 160, 160, 0.8)"};
  border: 2px solid #552367;
  border-radius: 80px;
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .react-icons {
    color: #552367;
    font-size: 1.5em;
    vertical-align: middle;
  }
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) {
    width: ${(props) => (props.simple ? "250px" : "300px")};
    height: ${(props) => (props.simple ? "60px" : "60px")};
    font-size: ${(props) => (props.simple ? "20px" : "24px")};
  }
  @media only screen and (max-width: 1000px) {
    width: ${(props) => (props.simple ? "250px" : "250px")};
    height: ${(props) => (props.simple ? "60px" : "50px")};
    font-size: ${(props) => (props.simple ? "20px" : "20px")};
  }
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 10;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: ${(props) => (props.small ? "20px" : "28px")};
  color: #552367;
  font-weight: 500;
  width: 400px;
  background-color: #ededed;
  border-radius: 40px;
  border: 2px solid #552367;
  text-align: start;
  &:first-child {
    padding-top: 0.8em;
  }
  margin-bottom: 0.4em;

  @media only screen and (max-width: 1500px) {
    width: 320px;
  }
  @media only screen and (max-width: 1000px) {
    width: 260px;
  }
  @media screen and (max-width: 500px) {
    ${(props) =>
      props.isConsoleMain ? "" : "max-height: 200px; overflow-y: scroll;"};

    margin-bottom: 0;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.h1`
  color: #552367;
  font-family: "Basic-Black";
  margin-bottom: 20px;
`;

export {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Text,
};
