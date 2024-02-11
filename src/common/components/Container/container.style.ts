import styled from "styled-components";

export const StyledContainer = styled("div")`
  color: ${({ theme }) => theme.palette.primary.white};
  display: flex;
  box-sizing: border-box;
`;
