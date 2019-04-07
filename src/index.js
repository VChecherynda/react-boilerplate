import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';

import AppLayoutContainer from './containers/AppLayoutContainer';

const history = createBrowserHistory();
const { store, persistor } = createStore(history);

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path="/" component={AppLayoutContainer} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

