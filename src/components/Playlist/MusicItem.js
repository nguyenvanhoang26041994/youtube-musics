import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../components/core';
import withYoutubeLink from '../../HOC/withYoutubeLink'
import tailwindColors from '../../utils/tailwindColors';
import { calcTime } from '../../utils/time';

const MusicItemWrapper = styled.div`
  &.ui-music-item {
    &:hover {
      .ui-music-item__options {
        opacity: 1;
      }
    }

    .ui-music-item__options {
      opacity: 0;
      transition: opacity 0.3s;
    }
  }

  &.ui-music-item--active {
    background-color: ${tailwindColors['teal-500']};
  }
`;

const YoutubeLink = withYoutubeLink(Icon);

const MusicItem = ({ className, onClick, name, singersName, time, id, listenNumber, isActive, isPlaying, index }) => {
  return (
    <MusicItemWrapper className={cn('ui-music-item flex h-8 items-center hover:glass cursor-pointer transition-fast', { 'ui-music-item--active': isActive }, className)} onClick={onClick}>
      <div className="flex items-center pl-3 w-2/3 h-full">
        <div className="text-white text-2xs font-mono w-1/12">{index}</div>
        <h5 className="ui-music-item__name cursor-pointer w-6/12 text-white text-sm font-bold overflow-hidden truncate">{name}</h5>
        <h5 className="cursor-pointer w-5/12 text-xs text-gray-400 overflow-hidden truncate">{singersName}</h5>
      </div>
      <div className="flex items-center flex-1 justify-end pr-3 w-1/3 h-full">
        <div className="ui-music-item__options flex items-center flex-1 justify-end mr-5">
          <YoutubeLink name="youtube" size="2xl" color="white" className="mx-2" v={id} />
          <Icon name="download" size="sm" color="white" className="mx-2" />
          <Icon name="heart" size="sm" color="white" className="mx-2" />
          <Icon name="share" size="sm" color="white" className="mx-2" />
          <Icon name="playlist-add" size="sm" color="white" className="mx-2" />
        </div>
        <div className="font-mono text-2xs">{calcTime(time)}</div>
      </div>
    </MusicItemWrapper>
  );
};

MusicItem.displayName = 'MusicItem';
MusicItem.propTypes = {};
MusicItem.defaultProps = {};

export default MusicItem;
