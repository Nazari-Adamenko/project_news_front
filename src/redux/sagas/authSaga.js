import {
  takeEvery,
  put,
  call,
  select,
} from 'redux-saga/effects';

import api from '../../api/api';

import { SIGN_UP, USER_DATA } from '../../constants';
import { gotUsers, cannotBadRequest } from '../actions';

const AUTH_PATH = '/users';
const LOGIN_PATH = '/users/sign_in';

function* createUserSaga({ payload: values }) {
  const typeModal = yield select();
  const choiceOfPath = typeModal.auth.typeModal === SIGN_UP ? AUTH_PATH : LOGIN_PATH;
  try {
    const { data, headers } = yield call(api.post, choiceOfPath, { user: values });
    if (headers.authorization) {
      localStorage.setItem('token', headers.authorization);
    }
    yield put(gotUsers(data.message));
  } catch (e) {
    yield put(cannotBadRequest(e.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(USER_DATA, createUserSaga);
}
