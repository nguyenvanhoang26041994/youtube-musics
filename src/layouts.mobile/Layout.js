import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

const LayoutWrapper = styled.div``;

const Layout = ({ children, navbarChildren }) => {
  return (
    <LayoutWrapper id="layout-mobile" className="font-common overflow-hidden min-h-screen bg-gray-200">
      <Navbar className="h-10 fixed top-0 w-full z-50" >
        {navbarChildren}
      </Navbar>
      <main className="flex flex-col flex-1">
        {children}
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
