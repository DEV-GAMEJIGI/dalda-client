import styled from '@emotion/styled';
import { rem } from 'polished';
import React from 'react';
import { colors } from '~/libs/colors';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: Props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  border: 1px solid ${colors.gray1};
  border-radius: ${rem(5)};
  outline: none;
`;

export default Input;
