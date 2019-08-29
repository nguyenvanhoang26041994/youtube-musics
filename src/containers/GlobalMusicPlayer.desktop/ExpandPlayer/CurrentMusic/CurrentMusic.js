import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Image, Icon } from '../../../../components/core';
import Lyrics from './Lyrics';

import usePlayingMusic from '../../../../hooks/usePlayingMusic';

const Wrapper = styled.div``;
const InforWrapper = styled.div``;

const CurrentMusic = ({ className }) => {
  const [playingMusic] = usePlayingMusic();

  return (
    <Wrapper className={cn('flex flex-col', className)}>
      <div className="h-20" />
      <InforWrapper className="flex flex-col items-center">
        <Image src={playingMusic.img} className="h-64 w-64 rounded-full" />
        <div className="flex items-center h-10">
          <Icon name="heart" color="white" className="mx-2" />
          <Icon name="ellipsis-h" color="white" className="mx-2" />
        </div>
        <div>
          <div className="flex text-white font-bold text-sm">
            <div className="text-gray-500 mr-3 w-16">Bài hát:</div>
            <span>{playingMusic.name}</span>
          </div>
          <div className="flex text-white font-bold text-sm">
            <div className="text-gray-500 mr-3 w-16">Ca sĩ:</div>
            <span>{playingMusic.singersName}</span>
          </div>
        </div>
      </InforWrapper>
      <Lyrics />
    </Wrapper>
  );
};

export default CurrentMusic;
