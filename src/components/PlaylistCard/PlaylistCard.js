import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import formatNumber from '../../utils/formatNumber';

import { Button, Icon, Image } from '../../components/core';

const PlaylistCardWrapper = styled.section`
  .ui-playlist-card__bg-img {
    filter: brightness(40%);
  }
`;

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
    <PlaylistCardWrapper className={cn('ui-playlist-card cursor-pointer flex flex-col relative flex flex-col justify-end h-32', className)}>
      <Image className="ui-playlist-card__bg-img absolute top-0 left-0 w-full h-full" src={musics[0] && musics[0].img} />
      <div className="z-10 p-1 w-full">
        <div className="flex flex-col">
          <div className="w-full overflow-hidden truncate text-white text-sm font-bold" onClick={goToPlaylistPage}>{name}</div>
          <div className="w-full overflow-hidden truncate text-white text-xs flex items-center">{musics.length} songs</div>
        </div>
        <Button
          size="xs"
          color="indigo-500"
          size="xs"
          className="ui-playlist-card__playbutton text-white rounded-sm mt-3"
          onClick={handleClickPlayPlaylist}
          buttonRef={playButtonRef}
        >
          <span className="mr-2">PLAY</span>
          <Icon name="play" />
        </Button>
      </div>
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
