import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import formatNumber from '../../utils/formatNumber';

import { Button, Icon, Image } from '../../components/core';

const PlaylistCardWrapper = styled.section`
  &.ui-playlist-card {
    background-color: #232526;

    .ui-playlist-card__bg-img {
      img {
        filter: blur(1px) grayscale(50%) brightness(50%);
        transform: scale(1.1, 1.1);
        transition: 0.5s;
      }
    }

    &:hover {
      .ui-playlist-card__bg-img {
        img {
          filter: none;
          transform: scale(1.2, 1.2);
        }
      }
    }
  }

  &.ui-playlist-card--is-playing.ui-playlist-card--is-playing,
  &.ui-playlist-card--is-playing.ui-playlist-card--is-playing:hover {
    .ui-playlist-card__bg-img {
      img {
        filter: none;
      }
    }
  }
`;

const PlaylistCardWrapperRelative = styled.div``;

const PlaylistCard = ({ className, name, musics, id, user, listenCount, playPlaylist, isPlaying }) => {
  const router = useRouter();
  const playButtonRef = React.useRef();

  const goToPlaylistPage = e => {
    if (playButtonRef.current && playButtonRef.current.contains && playButtonRef.current.contains(e.target)) {
      return;
    }

    return router.push(`/playlist?id=${id}`, `/playlist/${id}`);
  };

  const handleClickPlayPlaylist = () => {
    if (isPlaying) {
      return;
    }
    return playPlaylist({
      id,
      name,
      musics,
      user,
    });
  };

  return (
    <PlaylistCardWrapper className={cn('ui-playlist-card cursor-pointer flex flex-col', { 'ui-playlist-card--is-playing': isPlaying }, className)} onClick={goToPlaylistPage}>
      <PlaylistCardWrapperRelative className="relative flex flex-col justify-end h-48">
        <Image className="ui-playlist-card__bg-img absolute top-0 left-0 w-full h-full" src={musics[0] && musics[0].img} />

        <div className="text-white flex items-center absolute top-0 right-0 m-2 z-10">
          <span className="font-mono text-2xs">{formatNumber(listenCount)}</span>
          <Icon name="headphones" className={cn('ml-2 text-2xs', { 'animated heartBeat infinite': isPlaying })} />
        </div>

        <div className="z-10 p-2 w-full">
          <div className="flex flex-col my-2">
            <div className="w-full overflow-hidden truncate text-white text-lg font-bold">{name}</div>
            <div className="w-full overflow-hidden truncate text-gray-400 text-2xs font-mono flex items-center">
              {musics.length} <span className="font-shadows-into-light ml-1 text-xs">songs</span>
            </div>
          </div>
          <Button
            size="sm"
            color="teal-700"
            size="xs"
            className={cn('ui-playlist-card__playbutton text-white rounded-sm my-2', { 'opacity-0': isPlaying })}
            onClick={handleClickPlayPlaylist}
            buttonRef={playButtonRef}
          >
            <span className="mr-3 overflow-hidden --display-when-hover-to-parent">PLAY PLAYLIST</span>
            <Icon name="play" />
          </Button>
        </div>

      </PlaylistCardWrapperRelative>
    </PlaylistCardWrapper>
  );
};

PlaylistCard.displayName = 'PlaylistCard';
PlaylistCard.propTypes = {
  playPlaylist: PropTypes.func,
};
PlaylistCard.defaultProps = {
  playPlaylist: f => f,
};

export default PlaylistCard;
