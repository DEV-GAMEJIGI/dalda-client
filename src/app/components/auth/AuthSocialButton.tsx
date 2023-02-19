import styled from '@emotion/styled';
import { Google, Kakao, Naver } from '../vector';

interface Props {
  provider: 'google' | 'naver' | 'kakao';
}

const icons = {
  google: Google,
  kakao: Kakao,
  naver: Naver,
};

function AuthSocialButton({ provider }: Props) {
  const host = process.env.API_HOST;
  const path = `${host}/oauth2/authorization/${provider}`;
  const Icon = icons[provider];

  return (
    <Anchor href={path}>
      <Icon />
    </Anchor>
  );
}

const Anchor = styled.a`
  display: flex;
  align-items: center;
`;

export default AuthSocialButton;
