import React from 'react';
import fp from 'lodash/fp';

import Playlist from '../components/Playlist';
import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';
import withPlayerActions from '../HOC/withPlayerActions';

export default fp.compose(
  withPlayerActions,
  withPlayingList,
  withPlayingMusic
)(Playlist);
