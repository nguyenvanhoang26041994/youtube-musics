import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxMiddleware from './middlewares/redux-middleware';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [reduxMiddleware, sagaMiddleware];

export const initializeStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)),
  ); 
  sagaMiddleware.run(rootSaga);

  return store;
}
