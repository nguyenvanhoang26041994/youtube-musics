import fp from 'lodash/fp';

import Playlist from '../components/Playlist';
import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';

export default fp.compose(
  withPlayingList,
  withPlayingMusic
)(Playlist);
