import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxMiddleware from './middlewares/redux-middleware';
import rootReducer from './reducers';

const middleWare = [reduxMiddleware];

export const initializeStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);
