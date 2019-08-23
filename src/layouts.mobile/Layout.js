import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

const LayoutWrapper = styled.div``;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper id="layout-mobile" className="font-common">
      <Navbar className="h-10 fixed top-0 w-full z-50" />
      <main className="flex flex-col flex-1">
        {children}
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
