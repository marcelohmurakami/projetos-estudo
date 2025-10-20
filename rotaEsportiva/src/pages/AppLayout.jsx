import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

import Sidebar from "../ui/Siderbar";

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 16rem 1fr;
    grid-template-rows: 6rem 1fr;
    height: 100vh;
`

const Header = styled.header`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    background-color: white;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.3);
`

const MainContainer = styled.div`
    background-color: #E9EBEF;
`


function AppLayout() {
    return(
        <MainGrid>
            <MainContainer>
                <Outlet />
            </MainContainer>
            <Header />
            <Sidebar />
        </MainGrid>
    )
}

export default AppLayout;