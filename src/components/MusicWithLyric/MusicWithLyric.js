import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from '../../components/core';
import usePlayingMusicNode from '../../hooks/usePlayingMusicNode';

const MusicWithLyricWrapper = styled.section`
  &.ui-music-with-lyric {
    .ui-music-with-lyric__name {
      top: 4rem;
    }

    .ui-music-with-lyric__lyric-wrapper {
      height: ${props => props.isCollapsed ? '500px' : 'initial' };
    }
  }
`;

const MusicWithLyric = ({ className, music, lyric, playMusic }) => {
  const [isCollapsed, setCollapsed] = React.useState(true);
  const toggleLyric = () => setCollapsed(prevValue => !prevValue);
  const [currentTime] = usePlayingMusicNode();

  return (
    <MusicWithLyricWrapper className={cn('ui-music-with-lyric flex flex-col w-full relative', className)} isCollapsed={isCollapsed}>
      <div className="ui-music-with-lyric__name w-full flex justify-center sticky z-10">
        <Button size="xl" color="teal-400" className={cn('m-2 text-white rounded-full')} onClick={playMusic}>
          <div className="text-lg flex items-center mx-10">
            <Icon name="music-note" className="mr-3" />
            <span className="font-lovers-quarrel text-3xl">{music.singersName} - {music.name}</span>
            <Icon name="music-note" className="ml-3" />
          </div>
        </Button>
      </div>
      {lyric && lyric.data && lyric.data.length && (
        <div className="flex flex-col">
          <ul className="ui-music-with-lyric__lyric-wrapper flex flex-col items-center font-shadows-into-light text-xl text-base overflow-hidden">
            {lyric && lyric.data.map((obj, idx) => (
              <li key={idx} className="text-gray-100">
                <p className={cn('lyric-line transition-fast', { 'lyric-line--active text-teal-400': obj.timeStart < currentTime && obj.timeEnd > currentTime})}>{obj.text}</p>
              </li>
            ))}
          </ul>
          <Icon
            name="ellipsis-h"
            color="teal-400"
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
