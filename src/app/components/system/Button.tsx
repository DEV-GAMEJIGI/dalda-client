import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors } from '~/libs/colors';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  color: white;
  font-size: ${rem(14)};
  padding-top: ${rem(10)};
  padding-bottom: ${rem(10)};
  border-radius: ${rem(5)};
  background: ${colors.personal};
`;

export default Button;
