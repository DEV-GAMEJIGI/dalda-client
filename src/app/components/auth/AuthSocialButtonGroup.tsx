import styled from '@emotion/styled';
import { rem } from 'polished';
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
  gap: ${rem(38)};
`;

const Group = styled.div`
  display: flex;
  gap: ${rem(48)};
`;

const Text = styled.span`
  text-align: center;
  font-size: ${rem(14)};
  font-weight: bold;
  color: ${colors.gray3};
`;

export default AuthSocialButtonGroup;
