import {
  takeEvery,
  put,
  call,
  select,
} from 'redux-saga/effects';
import api from '../../api/api';

import { CHANGE_USER_REQUESTED } from '../../constants';
import { gotChangeUser, cannotUserData, togglePostModal } from '../actions';

const ROUT_CHANGE_TO_USERS = '/users/';

function* changeUserSaga({ payload }) {
  const currentAuthUser = yield select();
  const userId = currentAuthUser.userData.currentUserToken.id;
  const formData = new FormData();
  formData.append('avatar', payload.image);
  formData.append('name', payload.data.name);
  try {
    const { data } = yield call(
      api.patch,
      `${ROUT_CHANGE_TO_USERS}${userId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    yield put(gotChangeUser(data));
    yield put(togglePostModal({ status: false }));
  } catch ({ message }) {
    yield put(cannotUserData(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(CHANGE_USER_REQUESTED, changeUserSaga);
}
