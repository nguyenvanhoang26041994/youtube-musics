import fp from 'lodash/fp';

import Playlist from '../components/Playlist';

import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';

const PlayingList = ({ playingList, playingMusic, playingMusicActions, ...otherProps }) => {
  return (
    <Playlist
      isPlaying
      playingMusic={playingMusic}
      onPlayMusic={playingMusicActions.changeMusic}
      {...playingList}
      {...otherProps}
    />
  );
};

export default fp.compose(
  withPlayingList,
  withPlayingMusic
)(PlayingList);
