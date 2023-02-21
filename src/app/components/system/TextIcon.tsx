import styled from '@emotion/styled';
import { rem } from 'polished';
import React from 'react';

interface Props {
  text: string;
  icon: React.ReactNode;
  gap: number;
}

function TextIcon({ text, icon, gap }: Props) {
  return (
    <Block gap={gap}>
      {icon}
      {text}
    </Block>
  );
}

const Block = styled.div<{ gap: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => rem(props.gap)};
`;

export default TextIcon;
