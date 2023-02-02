import styled from '@emotion/styled';
import { Logo } from '../vector';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

function Auth() {
  return (
    <Section>
      <Logo width={131} height={57} />
      <AuthSocialButtonGroup />
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;

export default Auth;
