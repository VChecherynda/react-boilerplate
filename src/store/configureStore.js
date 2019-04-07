import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

export default (rootReducer, rootSaga, history) => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddlewareWithHistory = routerMiddleware(history);

  middleware.push(sagaMiddleware);
  middleware.push(routerMiddlewareWithHistory);

  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  let args = [persistedReducer, {}, applyMiddleware(...middleware)];

  if (process.env.NODE_ENV === 'development') {
    args = [persistedReducer, {}, composeWithDevTools(applyMiddleware(...middleware))]
  }

  const store = createStore(...args);
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
