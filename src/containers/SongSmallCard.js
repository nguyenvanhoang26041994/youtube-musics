import React, { useMemo } from 'react';
import { playMusic as _playMusic } from '../actions/player';
import SongSmallCard from '../components/SongSmallCard';
import usePlayingMusic from '../hooks/usePlayingMusic';
import usePlayer from '../hooks/usePlayer';

const SongSmallCardEnhancer = props => {
  const [playingMusic] = usePlayingMusic();
  const { playMusic } = usePlayer();

  const id = props.id;
  const onClick = () => playMusic({
    id,
    src: props.src,
    name: props.name,
    singers: props.singers,
    img: props.img,
  });

  return (
    <SongSmallCard
      onClick={onClick}
      isPlaying={playingMusic.id === id}
      {...props}
    />
  );
}

export default React.memo(SongSmallCardEnhancer);
