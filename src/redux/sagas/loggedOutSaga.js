import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { AUTH_LOGOUT } from '../../constants';
import { cannotBadRequest } from '../actions';

const LOGOUT_PATH = '/users/sign_out';
const validateStatusRequest = 'OK';

function* createLoggedOutSaga() {
  try {
    const data = yield call(api.delete, LOGOUT_PATH);
    if (data.statusText === validateStatusRequest) {
      localStorage.removeItem('token');
    }
  } catch (e) {
    yield put(cannotBadRequest(e.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(AUTH_LOGOUT, createLoggedOutSaga);
}
