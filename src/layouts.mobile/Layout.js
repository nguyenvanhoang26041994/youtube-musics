import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

const LayoutWrapper = styled.div``;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper id="layout-mobile">
      <Navbar className="h-12 fixed top-0 w-full z-50" />
      <main className="flex flex-col flex-1">
        {children}
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
