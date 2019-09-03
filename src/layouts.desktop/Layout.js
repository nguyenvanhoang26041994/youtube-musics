import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import usePlayingMusic from '../hooks/usePlayingMusic';

const LayoutWrapper = styled.div`
  /* .__bg {
    filter: blur(100px) brightness(5) grayscale(0.9);
  } */
`;

const Layout = ({ children }) => {
  const [playingMusic] = usePlayingMusic();

  return (
    <LayoutWrapper id="layout" className="layout bg-gray-100 min-h-screen flex flex-col m-auto">
      {/* <img src={playingMusic.img} className="__bg w-screen h-screen fixed top-0 left-0 object-cover" /> */}
      <Header />
      <Navbar className="w-screen z-20" />
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <div id="__gap-for-fix-global-music-player" className="h-16" />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
