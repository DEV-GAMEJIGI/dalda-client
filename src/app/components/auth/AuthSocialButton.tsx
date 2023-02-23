import styled from '@emotion/styled';
import { GoogleIcon, KakaoIcon, NaverIcon } from '../vector';

interface Props {
  provider: 'google' | 'naver' | 'kakao';
}

const icons = {
  google: GoogleIcon,
  kakao: KakaoIcon,
  naver: NaverIcon,
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
