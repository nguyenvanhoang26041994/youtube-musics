import { combineReducers } from 'redux';
import appReducer from '../App/reducer';
import playingMusic from './playing-music';

const createReducer = (injectedReducers) => combineReducers({
  playingMusic,
  app: appReducer,
  ...injectedReducers,
});

export default createReducer();
export { createReducer };
