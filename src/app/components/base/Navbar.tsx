import styled from '@emotion/styled';
import { Account, Add, Clock, Home, Search } from '../vector';
import NavbarItem from './NavbarItem';

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarItem to="/" text="홈" icon={<Home />} />
      <NavbarItem to="/" text="최신" icon={<Clock />} />
      <NavbarItem to="/" icon={<Add />} />
      <NavbarItem to="/" text="검색" icon={<Search />} />
      <NavbarItem to="/" text="설정" icon={<Account />} />
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Navbar;
