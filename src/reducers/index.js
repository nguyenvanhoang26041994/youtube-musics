import { combineReducers } from 'redux';
import appReducer from '../App/reducer';

const createReducer = (injectedReducers) => combineReducers({
  app: appReducer,
  ...injectedReducers,
});

export default createReducer();
export { createReducer };
