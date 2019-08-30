import React, { useRef, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Image, Divider, Icon } from '../../../components/core';
import ListMusic from './ListMusic';
import CurrentMusic from './CurrentMusic';

import usePlayingMusic from '../../../hooks/usePlayingMusic';
import usePlayingList from '../../../hooks/usePlayingList';

const Wrapper = styled.div``;

const ExpandPlayer = ({ className, style, expandDown, expandPlayerRef }) => {
  const [playingMusic] = usePlayingMusic();
  const [playingList] = usePlayingList();

  const isShowListMusic = useMemo(() => !!playingList.musics.length, [playingList.musics.length]);

  return (
    <Wrapper className={cn('expand-player flex overflow-hidden', className)} style={style} ref={expandPlayerRef}>
      <ListMusic className={cn('w-5/12', { hidden: !isShowListMusic })}></ListMusic>
      <CurrentMusic className={cn({ 'w-7/12': isShowListMusic, 'w-full': !isShowListMusic })}></CurrentMusic>
      <Image
        className="absolute w-full h-full top-0 left-0 z-m1"
        src={playingMusic.img}
        style={{
          filter: 'blur(35px) brightness(0.5) grayscale(0.6)',
          transform: 'scale(1.5)',
        }}
      />
      <Icon name="chevron-arrow-down" color="white" size="sm" className="absolute right-0 top-0 m-2" onClick={expandDown} />
    </Wrapper>
  );
};

export default ExpandPlayer;
