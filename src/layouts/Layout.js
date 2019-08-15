import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  &.layout {
    background: #232526;
    background: -webkit-linear-gradient(to right, #232526, #414345);
    background: linear-gradient(to right, #232526, #414345);
  }
`;

const Layout = ({ children }) => (
  <LayoutWrapper id="layout" className="layout min-h-screen flex flex-col m-auto">
    <Header />
    <Navbar className="sticky top-0 w-screen z-20" />
    <main className="flex flex-col flex-1">
      {children}
    </main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
