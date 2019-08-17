import React from 'react';
import { compose } from 'redux';
import MusicCard from '../components/MusicCard';
import withPlayerActions from '../HOC/withPlayerActions';
import withPlayingMusic from '../HOC/withPlayingMusic';

const MusicCardEnhancer = ({ playerActions, playingMusic, ...otherProps }) => {
  const id = otherProps.id;
  const onClick = () => playerActions.playMusic({
    id,
    src: otherProps.src,
    name: otherProps.name,
    singers: otherProps.singers,
    img: otherProps.img,
  });

  return (
    <MusicCard
      onClick={onClick}
      isPlaying={playingMusic.id === id}
      {...otherProps}
    />
  );
}

export default compose(
  withPlayingMusic,
  withPlayerActions,
)(MusicCardEnhancer);