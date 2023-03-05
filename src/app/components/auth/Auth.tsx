import styled from '@emotion/styled';
import { rem } from 'polished';
import { LogoIcon } from '../vector';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

function Auth() {
  return (
    <Section>
      <LogoIcon width={131} height={57} />
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
  gap: ${rem(160)};
`;

export default Auth;
