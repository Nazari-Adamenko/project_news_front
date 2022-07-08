import {
  takeEvery,
  put,
  call,
  // select,
} from 'redux-saga/effects';
import api from '../../api/api';

import { POSTS_REQUESTED, URL_FOR_POST } from '../../constants';
import { gotPosts, cannotGetNews } from '../actions';

function* getPostSaga() {
  try {
    const { data } = yield call(api.get, URL_FOR_POST);
    yield put(gotPosts(data));
  } catch ({ message }) {
    yield put(cannotGetNews(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(POSTS_REQUESTED, getPostSaga);
}
