import styled from '@emotion/styled';
import { rem } from 'polished';
import React from 'react';
import Button from '../system/Button';

interface Props {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function WriteFormTemplate({ children, onSubmit }: Props) {
  return (
    <StyledForm onSubmit={onSubmit}>
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
