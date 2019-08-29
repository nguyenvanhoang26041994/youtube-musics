import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import usePlayingMusicNode from '../../../../hooks/usePlayingMusicNode';
import usePlayingMusic from '../../../../hooks/usePlayingMusic';

const Wrapper = styled.div`
  .lyric-line--active {
    transition: 0.25s;
    transform: scale(1.1, 1.1);
  }
`;

const Lyrics = ({ className }) => {
  const [playingMusic] = usePlayingMusic();
  const [node, time, currentTime] = usePlayingMusicNode();

  return (
    <Wrapper className={cn('', className)}>
      <ul className="ui-music-with-lyric__lyric-wrapper flex flex-col items-center font-shadows-into-light text-sm text-base overflow-hidden">
        {playingMusic.lyrics.map((obj, idx) => (
          <li key={idx} className="text-white">
            <p className={cn('lyric-line transition-fast', { 'lyric-line--active text-yellow-600': obj.timeStart < currentTime && obj.timeEnd > currentTime})}>{obj.text}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Lyrics;
