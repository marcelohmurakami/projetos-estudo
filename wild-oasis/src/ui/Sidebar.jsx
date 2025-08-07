import styled from "styled-components";
import MainNav from "../ui/MainNav";

const SideBar = styled.header`
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  border-right: solid 1px var(--color-grey-200);
`;

const Logo = styled.img `
  display: block;
  margin: 3rem auto;
  width: 70%;
`

function Sidebar() {
  return <SideBar>
    <Logo src="/logo-light.png" alt="Logo"></Logo>
    <MainNav />
  </SideBar>;
}

export default Sidebar;
