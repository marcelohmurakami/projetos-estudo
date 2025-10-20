import React from "react";
import styled from "styled-components";
import {
  LayoutDashboard,
  Users,
  Plane,
  Wallet,
  FileText,
  Bell,
  BarChart3,
  Settings
} from "lucide-react";

import logoRota from '../data/images/logo_rota.png';

const SidebarStyle = styled.section`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 3px 0 2px rgba(0, 0, 0, 0.3);
`
const Img = styled.img`
    max-width: 60%;
    max-height: 60%;
    object-fit: contain;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    padding: 1.5rem 0;
    width: 80%;
    border-top: 2px solid #ddd;
    justify-content: flex-start;
`

const ListItem = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 5px 0px 5px 8px;
    cursor: pointer;
    transition: 0.2s ease;
    border-radius: 7.5px;

    &:hover {
        background-color: #111010ff;
        color: #f8f8f8ff;
    }
`

function Sidebar () {
    return (
        <SidebarStyle>
            <Img src={logoRota} alt="Logo da empresa" />
            <Ul>
                <li>
                    <ListItem>
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <Users size={18} />
                        <span>Clientes</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <Plane size={18} />
                        <span>Viagens</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <Wallet size={18} />
                        <span>Financeiro</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <FileText size={18} />
                        <span>Contratos</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <Bell size={18} />
                        <span>Lembretes</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <BarChart3 size={18} />
                        <span>Relatórios</span>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <Settings size={18} />
                        <span>Configurações</span>
                    </ListItem>
                </li>
            </Ul>
        </SidebarStyle>
    )
}

export default Sidebar;