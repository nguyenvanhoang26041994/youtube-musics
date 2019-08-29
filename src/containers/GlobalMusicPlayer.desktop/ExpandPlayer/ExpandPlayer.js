import React, { useRef } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Image, Divider, Icon } from '../../../components/core';
import ListMusic from './ListMusic';
import CurrentMusic from './CurrentMusic';

import usePlayingMusic from '../../../hooks/usePlayingMusic';
import useClickOutside from '../../../hooks/useClickOutside';

const Wrapper = styled.div``;

const ExpandPlayer = ({ className, style, expandDown, expandPlayerRef }) => {
  const [playingMusic] = usePlayingMusic();

  return (
    <Wrapper className={cn('expand-player flex overflow-hidden', className)} style={style} ref={expandPlayerRef}>
      <ListMusic className="w-6/12"></ListMusic>
      <CurrentMusic className="w-6/12"></CurrentMusic>
      <Image
        className="absolute w-full h-full top-0 left-0 z-m1"
        src={playingMusic.img}
        style={{
          filter: 'blur(35px) brightness(0.65) grayscale(0.6)',
          transform: 'scale(1.5)',
        }}
      />
      <Icon name="chevron-arrow-down" color="white" size="sm" className="absolute right-0 top-0 m-2" onClick={expandDown} />
    </Wrapper>
  );
};

export default ExpandPlayer;
