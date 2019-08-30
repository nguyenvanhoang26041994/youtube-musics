import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import usePlayingMusicNode from '../../../../hooks/usePlayingMusicNode';
import usePlayingMusic from '../../../../hooks/usePlayingMusic';

import getPageY from '../../../../utils/getPageY';

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
  const ulRef = useRef();

  useEffect(() => {
    // scroll to active lyric per 0.5s
    const scrollToActiveLyric = () => {
      const activeLyricNode = ulRef.current && ulRef.current.querySelector('.lyric-line--active');
      if (activeLyricNode) {
        ulRef.current.scrollTo(0, getPageY(activeLyricNode) - getPageY(ulRef.current) - 100);
      }
    };

    const timer = setInterval(scrollToActiveLyric, 5678);

    () => clearInterval(timer);
  }, [playingMusic.id]);

  return (
    <Wrapper className={cn('flex justify-center items-center', className)}>
      <div className="lyric-wrapper flex flex-col w-full">
        <ul
          className="lyric-wrapper__ul text-sm flex flex-col items-center w-full overflow-y-scroll"
          style={{
            maxHeight: '22rem',
            scrollBehavior: 'smooth',
          }}
          ref={ulRef}
        >
          <li><p className="h-8"></p></li>
          {playingMusic.lyrics.map((obj, idx) => (
            <li key={idx} className="text-white">
              <p
                className={
                  cn(
                    'lyric-line transition-fast text-base',
                    {
                      'lyric-line--active text-yellow-500': obj.timeStart < currentTime && obj.timeEnd > currentTime,
                    }
                  )}
                >
                {obj.text}
              </p>
            </li>
          ))}
          <li><p className="h-8"></p></li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Lyrics;
