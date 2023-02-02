import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { colors } from '~/libs/colors';

interface Props {
  to: string;
  text?: string;
  icon: React.ReactNode;
}

function NavbarItem({ to, text, icon }: Props) {
  const { asPath } = useRouter();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(asPath);
  }, [asPath]);

  return (
    <StyledLink href={to} pathname={pathname}>
      {icon}
      {text && <Text>{text}</Text>}
    </StyledLink>
  );
}

const StyledLink = styled(Link)<{ pathname: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  text-decoration: none;
  color: ${(props) => (props.href === props.pathname ? colors.gray4 : colors.gray2)};

  svg {
    color: ${(props) => (props.href === props.pathname ? colors.gray4 : colors.gray2)};
  }
`;

const Text = styled.div`
  font-size: 0.625rem;
  font-weight: bold;
`;

export default NavbarItem;
