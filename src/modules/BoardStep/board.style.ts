import styled from "styled-components";
import { Container } from "@components";

export const BoardWrapper = styled(Container)`
  background-color: ${({ theme }) => theme.palette.named.wood};
  border-radius: ${({ theme }) => theme.spacing(3)};
  flex: 1;
`;

export const BoardContent = styled(Container)`
  background-color: ${({ theme }) => theme.palette.named.board};
  border-radius: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.5);
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
  flex: 1;
`;
