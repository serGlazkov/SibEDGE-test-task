import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { mainReducer } from './mainReducer';
import { rootSaga } from './rootSaga';

let store;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initState, history) => {
  const initialState = initState || {};

  const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    mainReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  return store;
};

export function runSagaMiddleware() {
  sagaMiddleware.run(rootSaga);
}
