import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer, { createReducer } from './reducers';

const middleWare = [];
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middleWare))(createStore);

const store = createStoreWithMiddleware(rootReducer);

store._injectedReducers = {};
store._injectedSagas = {};
store._getNextReducer = () => createReducer(store._injectedReducers);

store._injectReducer = ({ key, reducer }) => {
  if (!key || typeof reducer !== 'function') { return false; }

  store._injectedReducers[key] = reducer;
  store.replaceReducer(store._getNextReducer());

  return store._injectedReducers[key];
};

store._removeInjectedReducer = key => {
  if (!key) { return false; }

  delete store._injectedReducers[key];
  store.replaceReducer(store._getNextReducer());

  return true;
};

export default store;

if (process.env.NODE_ENV === 'development') {
  try { window.store = store; } catch(e) {};
}
