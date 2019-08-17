import fp from 'lodash/fp';

import PlaylistCard from '../components/PlaylistCard';
import withPlayingList from '../HOC/withPlayingList';
import withPlayerActions from '../HOC/withPlayerActions';

const PlaylistCardEnhancer = ({ playingList, playerActions, ...otherProps }) => {
  const id = otherProps.id;

  return (
    <PlaylistCard
      isPlaying={playingList.id === id}
      playPlaylist={playerActions.playPlaylist}
      {...otherProps}
    />
  );
};

export default fp.compose(
  withPlayerActions,
  withPlayingList,
)(PlaylistCardEnhancer);
