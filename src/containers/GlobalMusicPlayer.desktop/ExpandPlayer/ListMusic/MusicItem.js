import React, { useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import usePlayer from '../../../../hooks/usePlayer';
import usePlayingMusic from '../../../../hooks/usePlayingMusic';

const Wrapper = styled.div``;

const colors = Object.freeze({
  'true': 'text-indigo-400',
  'false': 'text-white',
});

const MusicItem = ({ className, orderText, ...music}) => {
  const { playMusic } = usePlayer();
  const [playingMusic] = usePlayingMusic();
  const color = useMemo(() => colors[playingMusic.id === music.id], [playingMusic.id]);

  return (
    <Wrapper
      className={cn('h-10 flex items-center cursor-pointer', color, className)}
      onClick={() => playMusic(music)}
    >
      <div className="w-10 text-sm">{orderText}</div>
      <div className="flex-1 text-sm">{music.name}</div>
      <div className="w-32 truncate text-gray-500 text-xs">{music.singersName}</div>
    </Wrapper>
  );
};

export default MusicItem;
