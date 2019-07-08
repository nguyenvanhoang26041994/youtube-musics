import { combineReducers } from 'redux';
import appReducer from '../App/reducer';
import playingMusic from './playing-music';
import playingList from './playing-list';

const createReducer = (injectedReducers) => combineReducers({
  playingMusic,
  playingList,
  app: appReducer,
  ...injectedReducers,
});

export default createReducer();
export { createReducer };
