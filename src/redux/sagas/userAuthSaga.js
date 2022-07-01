import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { USER_DATA_AUTH_REQUESTED } from '../../constants';
import { gotUserDataAuth, cannotUserData } from '../actions';

const USER_AUTH_AND_POSTS = '/member-data';

function* getUserAuthSaga() {
  try {
    const { data } = yield call(api.get, USER_AUTH_AND_POSTS);
    yield put(gotUserDataAuth(data));
  } catch (error) {
    yield put(cannotUserData(error.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(USER_DATA_AUTH_REQUESTED, getUserAuthSaga);
}
