import React from 'react';
import SongCard from '../components/SongCard';
import withPlayerActions from '../HOC/withPlayerActions';

const SongCardEnhancer = ({ playerActions, ...otherProps }) => {
  const onClick = () => playerActions.playMusic({
    id: otherProps.id,
    src: otherProps.src,
    name: otherProps.name,
    singers: otherProps.singers,
    img: otherProps.img,
  });

  return (
    <SongCard onClick={onClick} {...otherProps} />
  );
}

export default withPlayerActions(SongCardEnhancer);
