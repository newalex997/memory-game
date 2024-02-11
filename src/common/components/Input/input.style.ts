import styled from "styled-components";
import { Container } from "@components";

export const StyledInputWrap = styled(Container)`
  color: ${({ theme }) => theme.palette.primary.gray};
  flex-direction: column;
`;

export const StyledInput = styled("input")`
  background-color: ${({ theme }) => theme.palette.primary.white};
  color: ${({ theme }) => theme.palette.primary.black};
  padding: ${({ theme }) => theme.spacing(3)};
  box-sizing: border-box;
  border: none;

  &:focus {
    outline: none;
  }
`;
