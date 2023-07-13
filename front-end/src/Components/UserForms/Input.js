import styled from "styled-components";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function Input({
  mask = "",
  maskChar = "",
  formatChars,
  variant = "outlined",
  value = "",
  onChange = () => 0,
  ...props
}) {
  return mask || maskChar ? (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      value={value}
      onChange={onChange}
      {...(formatChars && { formatChars })}
    >
      {() => <StyledTextField {...props} variant={variant} />}
    </InputMask>
  ) : (
    <StyledTextField
      {...props}
      value={value}
      onChange={onChange}
      variant={variant}
      color="secondary"
    />
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 8px !important;
  width: 100%;
  min-width: 245px !important;
  background-color: #e5e5e5;

  @media only screen and (max-width: 1200px) {
    max-width: 245px !important;
  }
`;
