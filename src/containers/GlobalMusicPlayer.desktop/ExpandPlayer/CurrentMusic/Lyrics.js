import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import usePlayingMusicNode from '../../../../hooks/usePlayingMusicNode';
import usePlayingMusic from '../../../../hooks/usePlayingMusic';

const Wrapper = styled.div`
  .lyric-wrapper {
    mask-image: -webkit-linear-gradient(top,hsla(0,0%,100%,0),hsla(0,0%,100%,.6) 15%,#fff 25%,#fff 75%,hsla(0,0%,100%,.6) 85%,hsla(0,0%,100%,0));
  }

  .lyric-line--active {
    transition: 0.25s;
    transform: scale(1.1, 1.1);
  }
`;

const Lyrics = ({ className }) => {
  const [playingMusic] = usePlayingMusic();
  const [node, time, currentTime] = usePlayingMusicNode();

  return (
    <Wrapper className={cn('flex justify-center items-center', className)}>
      <div className="lyric-wrapper flex flex-col w-full">
        <ul className="text-sm flex flex-col items-center w-full overflow-y-scroll" style={{ maxHeight: '22rem' }}>
          <li><p className="h-8"></p></li>
          {playingMusic.lyrics.map((obj, idx) => (
            <li key={idx} className="text-white">
              <p className={cn('lyric-line transition-fast text-base', { 'lyric-line--active text-yellow-500': obj.timeStart < currentTime && obj.timeEnd > currentTime})}>{obj.text}</p>
            </li>
          ))}
          <li><p className="h-8"></p></li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Lyrics;
