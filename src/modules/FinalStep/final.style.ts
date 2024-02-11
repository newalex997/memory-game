import styled from "styled-components";
import { Container } from "@components";

export const FinalStepWrap = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.pink};
  padding: ${({ theme }) => theme.spacing(5)};
  justify-content: center;
  align-items: center;
  flex: 1;
`;
