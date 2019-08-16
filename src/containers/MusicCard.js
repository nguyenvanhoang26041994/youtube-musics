import React from 'react';
import MusicCard from '../components/MusicCard';
import withPlayerActions from '../HOC/withPlayerActions';

const MusicCardEnhancer = ({ playerActions, ...otherProps }) => {
  const onClick = () => playerActions.playMusic({
    id: otherProps.id,
    src: otherProps.src,
    name: otherProps.name,
    singers: otherProps.singers,
    img: otherProps.img,
  });

  return (
    <MusicCard onClick={onClick} {...otherProps} />
  );
}

export default withPlayerActions(MusicCardEnhancer);
