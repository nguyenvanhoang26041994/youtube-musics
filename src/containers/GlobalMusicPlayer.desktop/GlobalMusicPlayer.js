import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Image } from '../../components/core';
import MiniPlayer from './MiniPlayer';
import ExpandPlayer from './ExpandPlayer';

import usePlayingMusic from '../../hooks/usePlayingMusic';
import useClickOutside from '../../hooks/useClickOutside';

const Wrapper = styled.div``;

const GlobalMusicPlayer = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const [playingMusic, playingMusicActions] = usePlayingMusic();
  const expandPlayerRef = useRef();
  const miniPlayerRef = useRef();

  const onClickExpandPlayerOutSide = e => {
    if (miniPlayerRef.current.contains(e.target)) {
      return;
    }
    setExpanded(false);
  };

  useClickOutside(expandPlayerRef, onClickExpandPlayerOutSide);

  useEffect(() => {
    if (playingMusic.id) {
      playingMusicActions.getMusicWithLyrics(playingMusic.id);
    }
  }, [playingMusic.id]);

  return (
    <Wrapper className={cn('global-music-player-container fixed bottom-0 left-0 w-screen bg-lizard transition-fast', { 'opacity-0': !playingMusic.src }, className)}>
      <div className="global-music-player container-custom container mx-auto relative">
        <MiniPlayer
          toggleExpanded={() => setExpanded(prevValue => !prevValue)}
          miniPlayerRef={miniPlayerRef}
        />
        <ExpandPlayer
          className="absolute w-full bottom-full z-m1"
          style={{
            height: expanded ? 'calc(100vh - 4rem)' : '0px',
            transition: 'height 0.2s ease-in-out 0.1s',
          }}
          expandPlayerRef={expandPlayerRef}
          expandDown={() => setExpanded(false)}
        />
      </div>
      <Image
        className={cn('absolute w-screen h-screen top-0 left-0 z-m1 transition-fast', { 'opacity-0': expanded })}
        src={playingMusic.img}
        style={{
          filter: 'blur(35px) brightness(0.65) grayscale(0.6)',
          transform: 'scale(1.5)',
        }}
      />
    </Wrapper>
  );
};

export default GlobalMusicPlayer;
