import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';

import api from '../../api/api';

import { USER_DATA } from '../constants';
import { gotUsers, cannotBadRequest } from '../actions';

function* createUserSaga({ payload: values }) {
  const typeModal = yield select();
  const choiceOfPath = typeModal.auth.typeModal === 'Sign Up' ? '/users' : '/users/sign_in';
  try {
    const data = yield call(api.post, choiceOfPath, { user: values });
    if (data.headers.authorization) {
      localStorage.setItem('token', data.headers.authorization);
    }
    yield put(gotUsers(data.data.message));
  } catch ({ message }) {
    yield put(cannotBadRequest(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(USER_DATA, createUserSaga);
}
