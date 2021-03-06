import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { AUTH_LOGOUT } from '../../constants';
import { cannotBadRequest } from '../actions';

const LOGOUT_PATH = '/users/sign_out';

function* createLoggedOutSaga() {
  try {
    yield call(api.delete, LOGOUT_PATH);
  } catch (e) {
    yield put(cannotBadRequest(e.message));
  } finally {
    localStorage.removeItem('token');
  }
}

export default function* watcherSaga() {
  yield takeEvery(AUTH_LOGOUT, createLoggedOutSaga);
}
