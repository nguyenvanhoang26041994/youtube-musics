import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Playlist from '../../containers/Playlist';

const PlaylistPage = ({ className }) => {
  return (
    <div className={cn('ui-playlist-page container mx-auto flex', className)}>
      <Playlist className="w-8/12" />
      <div className="w-4/12"></div>
    </div>
  );
};

export default PlaylistPage;
