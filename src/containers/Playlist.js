import fp from 'lodash/fp';

import Playlist from '../components/Playlist';
import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';
import withPlayerActions from '../HOC/withPlayerActions';

const PlaylistEnhancer = ({ playingList, playingMusic, playingMusicActions, playerActions, ...otherProps }) => {
  const id = otherProps.id;
  const isPlaying = playingList.id === id;

  const onPlayMusic = music => {
    if (isPlaying) {
      return playingMusicActions.changeMusic(music);
    }
    
    return playerActions.playMusic(music);
  };

  return (
    <Playlist
      isPlaying={isPlaying}
      playingMusic={playingMusic}
      onPlayMusic={onPlayMusic}
      onPlayPlaylist={playerActions.playPlaylist}
      {...otherProps}
    />
  );
};

export default fp.compose(
  withPlayerActions,
  withPlayingList,
  withPlayingMusic
)(PlaylistEnhancer);