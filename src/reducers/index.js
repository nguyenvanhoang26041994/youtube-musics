import { combineReducers } from 'redux';
import appReducer from '../App/reducer';
import playingMusicReducer from './playingMusicReducer';
import playingListReducer from './playingListReducer';
import playlistsReducer from './playlistsReducer';
import hotSongsReducer from './hotSongsReducer';

const createReducer = (injectedReducers) => combineReducers({
  playlistsReducer,
  hotSongsReducer,
  playingMusic: playingMusicReducer,
  playingList: playingListReducer,
  app: appReducer,
  ...injectedReducers,
});

export default createReducer();
export { createReducer };
