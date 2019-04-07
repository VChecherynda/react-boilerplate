
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './modules/auth';

export default (history) => combineReducers({
  auth,
  router: connectRouter(history),
});
