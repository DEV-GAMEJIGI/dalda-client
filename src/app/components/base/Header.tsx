import styled from '@emotion/styled';
import { rem } from 'polished';
import { Logo } from '../vector';

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: ${rem(64)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
