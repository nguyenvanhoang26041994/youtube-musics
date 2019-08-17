import fp from 'lodash/fp';

import Playlist from '../components/Playlist';

import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';

const PlayingList = ({ ...otherProps }) => {
  return (
    <Playlist
      isPlaying={false}
      musics={[]}
      name=''
      user={{}}
      playingMusic={{}}
      onPlayMusic={f => f}
      onPlayPlaylist={f => f}
      {...otherProps}
    />
  );
};

export default fp.compose(
  withPlayingList,
  withPlayingMusic
)(PlayingList);
