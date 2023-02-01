import styled from '@emotion/styled';
import { Logo } from '../vector';

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
