import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { DATA_USER_REQUESTED, ROUT_PATH_AUTH_USER } from '../../constants';
import { gotDataUser, cannotDataUser } from '../actions';

const USER_AUTH_AND_POSTS = '/member-data';
const ROUT_PATH_USERS = '/users/';

function* getUserSaga({ payload: value }) {
  const path = value.id === ROUT_PATH_AUTH_USER
    ? USER_AUTH_AND_POSTS
    : `${ROUT_PATH_USERS}${value.id}`;
  try {
    const { data } = yield call(api.get, path);
    yield put(gotDataUser(data));
  } catch (error) {
    yield put(cannotDataUser(error.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(DATA_USER_REQUESTED, getUserSaga);
}
