import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import playingMusicSelector from '../selectors/playingMusicSelector';
import * as playingMusicActions from '../actions/playing-music';

let shouldSkip = false;
let state = [];

export default () => {
  if (shouldSkip) {
    return state;
  }

  state = [
    useSelector(playingMusicSelector),
    bindActionCreators(playingMusicActions, useDispatch())
  ];

  shouldSkip = true;

  return state;
};
