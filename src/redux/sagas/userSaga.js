import { takeEvery, put, call } from 'redux-saga/effects';

import api from '../../api/api';

import { USER_DATA_REQUESTED } from '../../constants';
import { gotUserData, cannotUserData } from '../actions';

const ROUT_TO_USERS = '/users/';

function* getUserSaga({ payload: value }) {
  const path = `${ROUT_TO_USERS}${value.id}`;
  try {
    const { data } = yield call(api.get, path);
    yield put(gotUserData(data));
  } catch (error) {
    yield put(cannotUserData(error.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(USER_DATA_REQUESTED, getUserSaga);
}
