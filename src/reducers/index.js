import { combineReducers } from 'redux';
import appReducer from '../App/reducer';
import playingMusicReducer from './playingMusicReducer';
import playingListReducer from './playingListReducer';
import playlistsReducer from './playlistsReducer';
import hotSongsReducer from './hotSongsReducer';
import profilePageReducer from '../containers/ProfilePage/reducer';

export default combineReducers({
  playlistsReducer,
  hotSongsReducer,
  profilePageReducer,
  playingMusic: playingMusicReducer,
  playingList: playingListReducer,
  app: appReducer,
});
