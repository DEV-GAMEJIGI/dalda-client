import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { colors } from '~/libs/colors';

interface Props {
  to: string;
  text?: string;
  icon: React.ReactNode;
}

function NavbarItem({ to, text, icon }: Props) {
  return (
    <StyledLink href={to}>
      {icon}
      {text && <Text>{text}</Text>}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  text-decoration: none;

  svg {
    color: ${colors.gray2};
  }
`;

const Text = styled.div`
  font-size: 0.625rem;
  font-weight: bold;
  color: ${colors.gray2};
`;

export default NavbarItem;
