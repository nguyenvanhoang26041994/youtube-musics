import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = styled.div``;

const Layout = ({ children }) => (
  <LayoutWrapper id="layout" className="layout bg-gray-100 min-h-screen flex flex-col m-auto">
    <Header />
    <Navbar className="w-screen z-20" />
    <main className="flex flex-col flex-1">
      {children}
    </main>
    <div id="__gap-for-fix-global-music-player" className="h-16" />
    <Footer />
  </LayoutWrapper>
);

export default Layout;
