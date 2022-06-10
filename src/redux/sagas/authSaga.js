import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../api/api';

import { USER_REGISTRATION } from '../constants';
import { gotUsers, cannotBedRequest } from '../actions';

function* createUserSaga({ payload: values }) {
  try {
    const data = yield call(api.post, '/users', { user: values });
    yield put(gotUsers(data.data.message));
    localStorage.setItem('token', data.headers.authorization);
  } catch ({ message }) {
    yield put(cannotBedRequest(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(USER_REGISTRATION, createUserSaga);
}
