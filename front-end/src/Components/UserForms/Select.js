import { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FormControl, Select, OutlinedInput, InputLabel } from "@mui/material";

const FormControlWrapper = styled.section`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export default function MultiSelect({
  label,
  name,
  id,
  value,
  onChange,
  children,
}) {
  const inputLabelRef = useRef(null);

  return (
    <FormControlWrapper>
      <FormControl variant="outlined">
        <InputLabel ref={inputLabelRef} htmlFor={id}>
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              labelwidth={
                ReactDOM.findDOMNode(inputLabelRef.current)?.offsetWidth
              }
              name={name}
              id={id}
            />
          }
        >
          {children}
        </Select>
      </FormControl>
    </FormControlWrapper>
  );
}
