import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWare = [thunk];

export const initializeStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);
