import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors } from '~/libs/colors';
import { AccountIcon, AddIcon, ClockIcon, HomeIcon, SearchIcon } from '../vector';
import NavbarItem from './NavbarItem';

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarItem to="/" text="홈" icon={<HomeIcon />} />
      <NavbarItem to="/?mode=recent" text="최신" icon={<ClockIcon />} />
      <NavbarItem to="/write" icon={<AddIcon />} />
      <NavbarItem to="/search" text="검색" icon={<SearchIcon />} />
      <NavbarItem to="/account" text="마이" icon={<AccountIcon />} />
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  height: ${rem(64)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${colors.gray1};
`;

export default Navbar;
