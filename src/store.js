import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import sagaMode from './constants/saga-mode';
import rootReducer, { createReducer } from './reducers';
import rootSaga from './sagas';

const SAGA_MODE = Object.freeze({
  [sagaMode.TASK_CANCEL_WHEN_COMPONENT_UNMOUT]: sagaMode.TASK_CANCEL_WHEN_COMPONENT_UNMOUT,
  [sagaMode.NO_TASK_CANCEL_WHEN_COMPONENT_UNMOUT]: sagaMode.NO_TASK_CANCEL_WHEN_COMPONENT_UNMOUT,
});

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middleWare))(createStore);

const store = createStoreWithMiddleware(rootReducer);
sagaMiddleware.run(rootSaga);

store._injectedReducers = {};
store._injectedSagas = {};

store._runSaga = sagaMiddleware.run;
store._getNextReducer = () => createReducer(store._injectedReducers);


store._injectReducer = ({ key, reducer }) => {
  if (!key || typeof reducer !== 'function') { return false; }

  store._injectedReducers[key] = reducer;
  store.replaceReducer(store._getNextReducer());

  return store._injectedReducers[key];
};

store._ejectReducer = key => {
  if (!key) { return false; }

  delete store._injectedReducers[key];
  store.replaceReducer(store._getNextReducer());

  return true;
};

store._injectSaga = ({ key, saga, mode, args }) => {
  if (!key || typeof saga !== 'function') { return false; }
  if (store._injectedSagas[key]) { return store._injectedSagas[key]; }

  store._injectedSagas[key] = {
    mode: SAGA_MODE[mode] || sagaMode.TASK_CANCEL_WHEN_COMPONENT_UNMOUT,
    task: store._runSaga(saga, args),
  };

  return store._injectedSagas[key];
};

store._ejectSaga = key => {
  const injectedSaga = store._injectedSagas[key];

  if (injectedSaga && injectedSaga.mode === sagaMode.NO_TASK_CANCEL_WHEN_COMPONENT_UNMOUT) {
    return sagaMode.NO_TASK_CANCEL_WHEN_COMPONENT_UNMOUT;
  }

  if (injectedSaga &&
    injectedSaga.mode === sagaMode.TASK_CANCEL_WHEN_COMPONENT_UNMOUT &&
    injectedSaga.task &&
    injectedSaga.task.cancel
  ) {
    injectedSaga.task.cancel();
    delete store._injectedSagas[key];
    return sagaMode.TASK_CANCEL_WHEN_COMPONENT_UNMOUT;
  }

  return false;
};

export default store;

// DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  try { window.store = store; } catch(e) {};
}
