import { InputHTMLAttributes } from "react";
import { StyledInput, StyledInputWrap } from "./input.style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <StyledInputWrap>
      <label>{label}</label>
      <StyledInput {...props} />
    </StyledInputWrap>
  );
};

export default Input;
