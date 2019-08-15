import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Playlist from '../../containers/Playlist';
import RankingBoard from '../../containers/RankingBoard'

const PlaylistPage = ({ className }) => {
  return (
    <div className={cn('ui-playlist-page container mx-auto flex relative', className)}>
      <Playlist className="w-9/12 bg-gradient" />
      <RankingBoard className="w-3/12" />
    </div>
  );
};

export default PlaylistPage;
