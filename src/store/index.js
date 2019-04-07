import configureStore from './configureStore'
import reducers from './reducers';
import rootSaga from '../sagas';

export default (history) => {
  const rootReducer = reducers(history);
  return configureStore(rootReducer, rootSaga, history)
}
