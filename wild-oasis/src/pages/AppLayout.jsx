import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";

const MainGrid = styled.div `
    display: grid;
    grid-template-rows: 10rem 1fr;
    grid-template-columns: 32rem 1fr;
    height: 100vh;
`

const MainContainer = styled.main`
    background-color: var(--color-grey-100);
`

function AppLayout() {
  return (
    <MainGrid>
      <Header />
      <Sidebar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </MainGrid>
  );
}

export default AppLayout;
