import React, { useRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { mode } from '../constants/playing-list';
import withPlayingList from '../HOC/withPlayingList';
import withPlayingMusic from '../HOC/withPlayingMusic';
import withPlayerActions from '../HOC/withPlayerActions';

const GlobalAudio = ({ playingMusic, playingMusicActions, playerActions, playingList }) => {
  const audioRef = useRef();

  const onEnded = () => playerActions.goNextSong();
  const onPlay = e => playingMusicActions.changeIsPlaying(!e.target.paused);
  const onPause = e => playingMusicActions.changeIsPlaying(!e.target.paused);
  const onWaiting = e => playingMusicActions.changeIsPlaying(!e.target.paused);
  const onPlaying = e => playingMusicActions.changeIsPlaying(!e.target.paused);

  useEffect(() => {
    audioRef.current.addEventListener('play', onPlay);
    audioRef.current.addEventListener('pause', onPause);
    audioRef.current.addEventListener('waiting', onWaiting);
    audioRef.current.addEventListener('playing', onPlaying);
    audioRef.current.addEventListener('ended', onEnded);

    return () => {
      audioRef.current.removeEventListener('play', onPlay);
      audioRef.current.removeEventListener('pause', onPause);
      audioRef.current.removeEventListener('waiting', onWaiting);
      audioRef.current.removeEventListener('playing', onPlaying);
      audioRef.current.removeEventListener('ended', onEnded);
    }
  }, []);

  useEffect(() => {
    audioRef.current.loop = playingList.mode === mode.REPEAT
  }, [playingList.mode]);

  useEffect(() => {
    if (playingMusic.src) {
      audioRef.current.load && audioRef.current.load();
      audioRef.current.play && audioRef.current.play();
    }

    if (!playingMusic.src && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [playingMusic.src]);

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
