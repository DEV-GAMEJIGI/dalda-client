import styled from '@emotion/styled';
import { rem } from 'polished';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function WriteFormTemplate({ children }: Props) {
  return (
    <StyledForm>
      {children}
      <button>Submit</button>
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
