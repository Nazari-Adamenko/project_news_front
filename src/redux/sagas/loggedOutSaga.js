import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';

import api from '../../api/api';

import { AUTH_LOGOUT } from '../../constants';
import { gotUsers, cannotBadRequest } from '../actions';

const LOGOUT_PATH = '/users/sign_out';

function* createLoggedOutSaga() {
  const user = yield select();
  console.log(user);
  try {
    const data = yield call(api.delete, LOGOUT_PATH, { user });
    console.log(data);
    yield put(gotUsers(data.data.message));
  } catch (e) {
    yield put(cannotBadRequest(e.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(AUTH_LOGOUT, createLoggedOutSaga);
}
