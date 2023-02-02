import styled from '@emotion/styled';
import { colors } from '~/libs/colors';
import AuthSocialButton from './AuthSocialButton';

function AuthSocialButtonGroup() {
  return (
    <Block>
      <Text>SNS 로그인</Text>
      <Group>
        <AuthSocialButton provider="google" />
        <AuthSocialButton provider="naver" />
        <AuthSocialButton provider="kakao" />
      </Group>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
`;

const Group = styled.div`
  display: flex;
  gap: 3rem;
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.gray3};
`;

export default AuthSocialButtonGroup;
