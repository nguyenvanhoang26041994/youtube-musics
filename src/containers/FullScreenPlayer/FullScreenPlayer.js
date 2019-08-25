import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Icon, Slider, Image } from '../../components/core';
import MusicController from './MusicController';
import withPlayingMusic from '../../HOC/withPlayingMusic';

const FullScreenPlayerWrapper = styled.div`
  background-color: rgba(7, 20, 27, 0.95);

  .screen-player__bg {
    filter: blur(50px) brightness(60%) grayscale(10%);
  }
`;

const FullScreenPlayer = ({ className, onClose, playingMusic, fullScreenRef }) => {
  return (
    <FullScreenPlayerWrapper
      ref={fullScreenRef}
      className={cn('screen-player fixed z-50 w-screen h-screen top-0 left-0 flex flex-col animated fadeInUp faster overflow-hidden', className)}
    >
      <Image className="screen-player__bg absolute top-0 left-0 w-full h-full z-m1" src={playingMusic.img} />
      <div className="flex justify-between items-center h-8">
        <Icon name="angle-down" onClick={onClose} color="white" className="m-2" size="lg" />
        <Icon name="ellipsis-h" color="white" className="m-2" size="lg" />
        <Icon name="sync-alt" color="white" className="m-2" size="sm" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image src={playingMusic.img} className="w-64 h-64 mx-auto" />
        <div className="text-white text-base flex items-center h-16">
          {playingMusic.singersName} - {playingMusic.name}
        </div>
        <div className="h-16 flex items-center justify-around w-full">
          <Icon name="heart" color="white" size="sm" />
          <Icon name="share-square" color="white" size="sm" />
          <Icon name="ellipsis-h" color="white" size="sm" />
        </div>
      </div>
      <MusicController />
    </FullScreenPlayerWrapper>
  );
};

export default withPlayingMusic(FullScreenPlayer);
