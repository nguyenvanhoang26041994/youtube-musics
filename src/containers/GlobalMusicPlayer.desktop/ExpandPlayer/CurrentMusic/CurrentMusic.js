import React, { useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Image, Icon } from '../../../../components/core';
import Lyrics from './Lyrics';

import usePlayingMusic from '../../../../hooks/usePlayingMusic';

const Wrapper = styled.div``;
const InforWrapper = styled.div``;

const CurrentMusic = ({ className }) => {
  const [playingMusic, playingMusicActions] = usePlayingMusic();

  useEffect(() => {
    if (playingMusic.id) {
      playingMusicActions.getMusicWithLyrics(playingMusic.id);
    }
  }, [playingMusic.id]);

  return (
    <Wrapper className={cn('flex flex-col', className)}>
      <div className="h-10" />
      <InforWrapper className="flex flex-col items-center">
        <Image src={playingMusic.img} className={cn('h-64 w-64 rounded-full')} />
        <div className="flex items-center h-10">
          <Icon name="lyrics" color="yellow-500" className="mx-2" />
          <Icon name="heart" color="white" className="mx-2" />
          <Icon name="ellipsis-h" color="white" className="mx-2" />
        </div>
        <div className="flex items-center justify-center">
          <div className="tetx-sm text-white">{playingMusic.name}</div>
          <span className="mx-2 text-gray-500">–</span>
          <div className="text-sm text-gray-500">{playingMusic.singersName}</div>
        </div>
      </InforWrapper>
      <Lyrics className="flex-1 w-full" />
    </Wrapper>
  );
};

export default CurrentMusic;
