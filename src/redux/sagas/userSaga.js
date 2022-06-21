import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { DATA_USER_REQUESTED } from '../../constants';
import { gotDataUser, cannotDataUser } from '../actions';

const USER_AUTH_AND_POSTS = '/member-data';

function* getUserSaga({ payload: value }) {
  try {
    const { data } = yield call(api.get, USER_AUTH_AND_POSTS);
    yield put(gotDataUser(data));
  } catch (error) {
    yield put(cannotDataUser(error.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(DATA_USER_REQUESTED, getUserSaga);
}
