import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./input.style";

type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

const Button = ({ children, ...props }: InputProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
