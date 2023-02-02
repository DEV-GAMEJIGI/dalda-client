import styled from '@emotion/styled';
import Navbar from '../base/Navbar';
import FullHeight from '../system/FullHeight';

interface Props {
  children: React.ReactNode;
}

function ContentLayout({ children }: Props) {
  return (
    <FullHeight>
      <Content>{children}</Content>
      <Navbar />
    </FullHeight>
  );
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;
  padding: 1rem;
`;

export default ContentLayout;
