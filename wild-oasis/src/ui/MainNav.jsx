// src/ui/MainNav.jsx
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Ícones
import { FaHome, FaBookOpen, FaBed, FaUsers, FaCog } from "react-icons/fa";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 4rem;
  transition: all 0.3s;
  text-decoration: none;
  background-color: white;

  &.active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <NavList>
      <ListItem>
        <StyledNavLink to="/dashboard">
          <FaHome />
          Dashboard
        </StyledNavLink>
      </ListItem>

      <ListItem>
        <StyledNavLink to="/bookings">
          <FaBookOpen />
          Bookings
        </StyledNavLink>
      </ListItem>

      <ListItem>
        <StyledNavLink to="/cabins">
          <FaBed />
          Cabins
        </StyledNavLink>
      </ListItem>

      <ListItem>
        <StyledNavLink to="/users">
          <FaUsers />
          Users
        </StyledNavLink>
      </ListItem>

      <ListItem>
        <StyledNavLink to="/settings">
          <FaCog />
          Settings
        </StyledNavLink>
      </ListItem>
    </NavList>
  );
}

export default MainNav;

