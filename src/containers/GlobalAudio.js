import React, { useRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';
import withPlayerActions from '../HOC/withPlayerActions';

import { mode } from '../constants/playing-list';

const GlobalAudio = ({ playingMusic }) => {
  const audioRef = useRef();

  return (
    <audio
      id="music-audio"
      className="hidden"
      src={playingMusic.src}
      ref={audioRef}
    >
      <source src={playingMusic.src} />
    </audio>
  );
};

export const getNode = () => document.getElementById('music-audio');

export default compose(
  withPlayerActions,
  withPlayingList,
  withPlayingMusic,
)(GlobalAudio);
