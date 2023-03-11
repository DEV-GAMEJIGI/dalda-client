import styled from '@emotion/styled';
import { rem } from 'polished';
import React from 'react';
import Button from '../system/Button';

interface Props {
  children: React.ReactNode;
}

function WriteFormTemplate({ children }: Props) {
  return (
    <StyledForm>
      {children}
      <Button>등록하기</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;

export default WriteFormTemplate;
