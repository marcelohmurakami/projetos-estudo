import React from "react";
import styled from "styled-components";

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
    background-color: blue;
`

const MainContainer = styled.div`
    background-color: gray;
`


function AppLayout() {
    return(
        <MainGrid>
            <Header />
            <Sidebar />
            <MainContainer>

            </MainContainer>
        </MainGrid>
    )
}

export default AppLayout;