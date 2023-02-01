import styled from '@emotion/styled';
import React from 'react';
import Header from '../base/Header';
import Navbar from '../base/Navbar';

interface Props {
  children: React.ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <Block>
      <Header />
      <Content>{children}</Content>
      <Navbar />
    </Block>
  );
}

const Block = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default BaseLayout;
