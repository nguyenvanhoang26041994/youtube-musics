import React, { useEffect, useLayoutEffect, useDebugValue } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon, Divider } from '../../components/core';
import usePlayingMusicNode from '../../hooks/usePlayingMusicNode';

const MusicWithLyricWrapper = styled.section`
  &.ui-music-with-lyric {
    .ui-music-with-lyric__name {
      top: 4rem;
    }

    .ui-music-with-lyric__lyric-wrapper {
      height: ${props => props.isCollapsed ? '500px' : 'initial' };
    }

    .lyric-line--active {
      transition: 0.25s;
      transform: scale(1.1, 1.1);
    }
  }
`;

const MusicWithLyric = ({ className, music, lyric, playMusic }) => {
  const [isCollapsed, setCollapsed] = React.useState(true);
  const toggleLyric = () => setCollapsed(prevValue => !prevValue);
  const [node, time, currentTime] = usePlayingMusicNode();

  return (
    <MusicWithLyricWrapper className={cn('ui-music-with-lyric flex flex-col w-full relative', className)} isCollapsed={isCollapsed}>
      <div className="ui-music-with-lyric__name w-full flex justify-center">
        <div className="text-base flex items-center mx-4 text-indigo-500 cursor-pointer" onClick={playMusic}>
          <Icon name="music-note" className="mr-2" />
          <span className="text-xl">{music.singersName} - {music.name}</span>
          <Icon name="music-note" className="ml-2" />
        </div>
      </div>
      <Divider  className="mb-5 mt-2" />
      {lyric && lyric.data && (
        <div className="flex flex-col">
          <ul className="ui-music-with-lyric__lyric-wrapper flex flex-col items-center font-shadows-into-light text-sm text-base overflow-hidden">
            {lyric && lyric.data.map((obj, idx) => (
              <li key={idx} className="text-black">
                <p className={cn('lyric-line transition-fast', { 'lyric-line--active text-indigo-400': obj.timeStart < currentTime && obj.timeEnd > currentTime})}>{obj.text}</p>
              </li>
            ))}
          </ul>
          <Icon
            name="ellipsis-h"
            color="indigo-400"
            size="sm"
            className="mx-auto mt-5"
            onClick={toggleLyric}
          />
        </div>
      )}
    </MusicWithLyricWrapper>
  );
};

MusicWithLyric.displayName = 'MusicWithLyric';
MusicWithLyric.propTypes = {};
MusicWithLyric.defaultProps = {};

export default MusicWithLyric;
