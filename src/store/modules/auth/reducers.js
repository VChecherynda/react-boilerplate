import { handleActions } from 'redux-actions';
import { signIn, signUp, resetPassword } from './actions';

const defaultState = {
  isAuthenticated: false,
  session: {}
};

export default handleActions(
  {
    [signIn]: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload
    }),
    [signUp]: (state, { payload }) => ({
      ...state,
      session: payload
    }),
    [resetPassword]: (state, { payload }) => ({
      ...state,
      session: payload
    })
  },
  defaultState
);
