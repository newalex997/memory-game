import styled from "styled-components";
import { Container } from "@components";
import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const MainWrap = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.white};
  padding: ${({ theme }) => theme.spacing(3)};
  flex: 1;
`;

const AppMain = ({ children }: MainProps) => {
  return <MainWrap direction="column">{children}</MainWrap>;
};

export default AppMain;
