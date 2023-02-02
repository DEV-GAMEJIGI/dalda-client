import styled from '@emotion/styled';
import { colors } from '~/libs/colors';
import { Account, Add, Clock, Home, Search } from '../vector';
import NavbarItem from './NavbarItem';

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarItem to="/" text="홈" icon={<Home />} />
      <NavbarItem to="/?mode=recent" text="최신" icon={<Clock />} />
      <NavbarItem to="/write" icon={<Add />} />
      <NavbarItem to="/search" text="검색" icon={<Search />} />
      <NavbarItem to="/account" text="마이" icon={<Account />} />
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${colors.gray1};
`;

export default Navbar;
