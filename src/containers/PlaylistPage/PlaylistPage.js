import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Playlist from '../../containers/Playlist';
import RankingBoard from '../../containers/RankingBoard';

const PlaylistPageWrapper = styled.div`
  &.playlist-page {
    .playlist-page__ranking {
      background-color: #414345;
    }
  }
`;

const PlaylistPage = ({ className }) => {
  return (
    <PlaylistPageWrapper className={cn('playlist-page container mx-auto flex flex-col relative', className)}>
      <Playlist className="w-9/12 bg-gradient shadow-lg mx-auto" />
      <div className="h-32 w-full"></div>
      {/* <div className="w-3/12 pl-2">
        <RankingBoard className="playlist-page__ranking w-full" />
      </div> */}
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;
