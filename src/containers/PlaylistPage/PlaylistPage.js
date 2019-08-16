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
    <PlaylistPageWrapper className={cn('playlist-page container-custom container mx-auto flex flex-col relative flex-1 animated fadeIn', className)}>
      <Playlist className="bg-gradient shadow-lg mx-auto w-full flex-1" />
    </PlaylistPageWrapper>
  );
};

const PlaylistPageEnhancer = PlaylistPage;

export default PlaylistPageEnhancer;
