import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { AUTH_LOGOUT } from '../../constants';
import { cannotBadRequest } from '../actions';

const LOGOUT_PATH = '/users/sign_out';

function* createLoggedOutSaga() {
  localStorage.removeItem('token');
  try {
    yield call(api.delete, LOGOUT_PATH);
  } catch (e) {
    yield put(cannotBadRequest(e.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(AUTH_LOGOUT, createLoggedOutSaga);
}
