import React from 'react';
import { compose } from 'redux';
import Profile from '../components/Profile';
import withPlayerActions from '../HOC/withPlayerActions';
import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';

const ProfileEnhancer = ({ playerActions, playingList, playingMusic, ownerMusics, profile, ...otherProps }) => {
  const onPlayOwnerMusics = () => playerActions.playPlaylist({
    id: profile.id,
    name: profile.name,
    musics: ownerMusics,
    user: {
      id: 'admin-genius',
      name: 'GENIUS ADMIN',
    },
  });
  const isPlaylistPlaying = playingList.id === profile.id;
  return (
    <Profile
      onPlayOwnerMusics={onPlayOwnerMusics}
      ownerMusics={ownerMusics}
      profile={profile}
      isPlaylistPlaying={isPlaylistPlaying}
      playingMusic={playingMusic}
      {...otherProps}
    />
  );
};

export default compose(
  withPlayingMusic,
  withPlayingList,
  withPlayerActions,
)(ProfileEnhancer);
