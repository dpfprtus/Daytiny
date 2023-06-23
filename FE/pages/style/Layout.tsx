import WrapperBox from './WrapperBox';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Title from '../../components/layout/Title';

const MainLayout = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <WrapperBox>{children}</WrapperBox>
    </MainLayout>
  );
};
export default Layout;
