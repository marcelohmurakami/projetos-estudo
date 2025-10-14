import React from "react";
import styled from "styled-components";

import logoRota from '../data/images/logo_rota.png';

const SidebarStyle = styled.section`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
`
const Img = styled.img`
    max-width: 60%;
    max-height: 60%;
    object-fit: contain;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    align-self: flex-start
`

function Sidebar () {
    return (
        <SidebarStyle>
            <Img src={logoRota} alt="Logo da empresa" />
            <Ul>
                <li>Dasboard</li>
                <li>Clientes</li>
                <li>Viagens</li>
                <li>Financeiro</li>
                <li>Contratos</li>
                <li>Lembretes</li>
                <li>Relatórios</li>
                <li>Configurações</li>
            </Ul>
        </SidebarStyle>
    )
}

export default Sidebar;