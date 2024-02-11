import styled from "styled-components";

export const StyledButton = styled("button")`
  background-color: ${({ theme }) => theme.palette.primary.white};
  color: ${({ theme }) => theme.palette.primary.black};
  padding: ${({ theme }) => theme.spacing(3)};
  box-sizing: border-box;
  display: flex;
  border: none;

  &:focus {
    outline: none;
  }
`;
