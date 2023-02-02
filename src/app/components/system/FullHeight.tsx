import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function FullHeight({ children }: Props) {
  return <Block>{children}</Block>;
}

const Block = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default FullHeight;
