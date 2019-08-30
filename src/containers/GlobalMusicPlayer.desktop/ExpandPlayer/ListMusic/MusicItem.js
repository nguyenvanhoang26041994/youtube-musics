import React, { useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../../components/core';

import usePlayer from '../../../../hooks/usePlayer';
import usePlayingMusic from '../../../../hooks/usePlayingMusic';

const Wrapper = styled.div`
  &:hover {
    .music-item__actions {
      opacity: 1;
    }
  }
`;

const colors = Object.freeze({
  'true': 'text-yellow-500',
  'false': 'text-white',
});

const MusicItem = ({ className, orderText, ...music}) => {
  const { playMusic } = usePlayer();
  const [playingMusic] = usePlayingMusic();
  const isActive = useMemo(() => playingMusic.id === music.id, [playingMusic.id, music.id]);
  const isPlaying = useMemo(() => isActive && playingMusic.isPlaying, [isActive, playingMusic.isPlaying]);
  const color = useMemo(() => colors[isActive], [isActive]);

  return (
    <Wrapper
      className={cn('music-item h-8 flex items-center cursor-pointer relative', color, className)}
      onClick={() => playMusic(music)}
    >
      <div className="w-8 text-sm flex items-center justify-center">
        {isActive ? <Icon name="compact-disc" className={cn({ 'animated spin linear infinite': isPlaying })} size="lg" /> : orderText}
      </div>
      <div className="flex-1 text-sm truncate">{music.name}</div>
      <div className={cn('w-32 truncate text-xs', { 'text-yellow-500': isActive, 'text-gray-500': !isActive })}>{music.singersName}</div>
      <div className="w-6" />
      <div className="music-item__actions flex absolute right-0 top-haft translate-y-mhaft px-3 opacity-0">
        <Icon name="ellipsis-h" />
      </div>
    </Wrapper>
  );
};

export default MusicItem;
