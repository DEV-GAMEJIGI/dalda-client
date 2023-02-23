import styled from '@emotion/styled';
import { rem } from 'polished';
import React from 'react';
import ContentTitle from '../base/ContentTitle';
import Header from '../base/Header';
import Navbar from '../base/Navbar';
import FullHeight from '../system/FullHeight';

interface Props {
  children: React.ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <FullHeight>
      <Header />
      <Content>
        <ContentTitle />
        {children}
      </Content>
      <Navbar />
    </FullHeight>
  );
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${rem(16)};
  overflow: scroll;
  overflow-x: hidden;
  padding: ${rem(16)};
`;

export default BaseLayout;
