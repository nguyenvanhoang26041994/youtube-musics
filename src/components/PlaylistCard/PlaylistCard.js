import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatNumber from '../../utils/formatNumber';

import { Button, Icon, Image } from '../../components/core';

const PlaylistCardWrapper = styled.section`
  &.ui-playlist-card {
    background-color: #232526;

    .ui-playlist-card__bg-img {
      img {
        filter: blur(2px) grayscale(50%) brightness(50%);
        transition: 0.5s;
      }
    }

    &:hover {
      .ui-playlist-card__bg-img {
        img {
          filter: none;
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
`;

const PlaylistCard = ({ className, name, musics, listenCount, onClickPlayPlaylist }) => {
  return (
    <PlaylistCardWrapper className={cn('ui-playlist-card h-48 w-48 cursor-pointer p-1 flex flex-col justify-between relative', className)}>
      <div />
      <Image className="ui-playlist-card__bg-img absolute top-0 left-0 w-full h-full" src={musics[0] && musics[0].img} />
      <div className="z-10">
        <div className="flex flex-col my-2">
          <div className="w-full overflow-hidden truncate text-white text-lg font-bold">{name}</div>
          <div className="w-full overflow-hidden truncate text-gray-400 text-2xs font-mono flex items-center">
            {musics.length} songs, {formatNumber(listenCount)}<Icon name="headphones" className="ml-1" />
          </div>
        </div>
        <Button size="sm" color="teal-700" size="xs" className="ui-playlist-card__playbutton text-white rounded-sm my-2" onClick={onClickPlayPlaylist}>
          <span className="mr-3 overflow-hidden --display-when-hover-to-parent">PLAY PLAYLIST</span>
          <Icon name="play" />
        </Button>
      </div>
    </PlaylistCardWrapper>
  );
};

PlaylistCard.displayName = 'PlaylistCard';
PlaylistCard.propTypes = {
  onClickPlayPlaylist: PropTypes.func,
};
PlaylistCard.defaultProps = {
  onClickPlayPlaylist: f => f,
};

export default PlaylistCard;
