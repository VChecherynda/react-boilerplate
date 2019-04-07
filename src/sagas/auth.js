import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { signIn } from '../store/modules/auth/actions';

export function* signInWorker({ payload = {} }) {
  try {
    yield put(push('/main'));
  } catch (error) {
    console.log(error);
  }
}

export function* authWatcher() {
  yield takeEvery(signIn, signInWorker);
}

export default authWatcher;