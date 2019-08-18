import { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/playing-music';

const secretReduxStore = '__NEXT_REDUX_STORE__'; // you should to use Symbol to make key private
const playingMusicSelector = state => state.playingMusic;

export default function usePlayingMusic() {
  let playingMusic = {};
  let playingMusicActions = {};

  useEffect(
    () => {
      reduxStore = window[secretReduxStore];
      const state = reduxStore.getState();

      playingMusic = playingMusicSelector(state);
      playingMusicActions = bindActionCreators(actionCreators, reduxStore.dispatch);
    }
  );

  return [playingMusic, playingMusicActions];
}
