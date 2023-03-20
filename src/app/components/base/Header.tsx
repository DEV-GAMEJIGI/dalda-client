import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { rem } from 'polished';
import { LogoIcon } from '../vector';

function Header() {
  const router = useRouter();

  const onClickHeader = () => {
    return router.push('/');
  };

  return (
    <StyledHeader onClick={onClickHeader}>
      <LogoIcon />
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
