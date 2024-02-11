import styled from "styled-components";
import { Container } from "@components";

const HeaderWrap = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.violet};
  padding: ${({ theme }) => theme.spacing(3)};
  justify-content: space-between;
  margin: 0;
`;

const AppHeader = () => {
  return (
    <HeaderWrap>
      <h2>MEMORY APP GAME</h2>
      <Container id="HeaderControls"></Container>
    </HeaderWrap>
  );
};

export default AppHeader;
