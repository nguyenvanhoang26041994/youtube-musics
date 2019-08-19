import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from '../../components/core';

const MusicWithLyricWrapper = styled.section``;

const MusicWithLyric = ({ className, music, lyric, playMusic }) => {
  const [isCollapsed, setCollapsed] = React.useState(true);
  const toggleLyric = () => setCollapsed(prevValue => !prevValue);
  return (
    <MusicWithLyricWrapper className={cn('ui-music-with-lyric flex flex-col w-full', className)}>
      <div className="w-full flex justify-center">
        <Button size="sm" color="teal-400" className={cn('m-2 text-white rounded-full sticky top-0')} onClick={playMusic}>
          <div className="text-sm flex items-center mx-4">
            <Icon name="music-note" className="mr-3" />
            <span className="font-lovers-quarrel text-xl">{music.singersName} - {music.name}</span>
            <Icon name="music-note" className="ml-3" />
          </div>
        </Button>
      </div>
      {lyric && lyric.data && lyric.data.length && (
        <div className="flex flex-col">
          <ul className="flex flex-col items-center font-shadows-into-light text-base overflow-hidden" style={{ height: isCollapsed ? '500px' : 'auto' }}>
            {lyric && lyric.data.map((obj, idx) => (
              <li key={idx}>
                <p className="text-gray-100">{obj.text}</p>
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
