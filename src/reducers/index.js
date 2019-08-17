import { combineReducers } from 'redux';
import appReducer from '../App/reducer';
import playingMusicReducer from './playingMusicReducer';
import playingListReducer from './playingListReducer';
import profilePageReducer from '../containers/ProfilePage/reducer';
import homePageReducer from '../containers/HomePage/reducer';
import playlistPageReducer from '../containers/PlaylistPage/reducer';
import musicPageReducer from '../containers/MusicPage/reducer';

import reduxCache from './reduxCache';

export default combineReducers({
  reduxCache,
  musicPageReducer,
  profilePageReducer,
  playlistPageReducer,
  homePageReducer,
  playingMusic: playingMusicReducer,
  playingList: playingListReducer,
  app: appReducer,
});
