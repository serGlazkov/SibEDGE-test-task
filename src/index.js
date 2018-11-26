import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { throttle } from 'lodash';
import { configureStore, runSagaMiddleware } from './store';
import { GlobalStyle } from './common/styles/globalStyles';
import { App } from './App';
import { loadState, saveState } from './localStorage';

const store = configureStore(loadState());
store.subscribe(
  throttle(() => {
    saveState({
      users: {
        data: store.getState().users.data,
      },
    });
  }, 1000),
);

runSagaMiddleware();

const MainApp = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
