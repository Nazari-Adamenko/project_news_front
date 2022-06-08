import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../api/api';

import { POSTS_REQUESTED } from '../constants';
import { gotPosts, cannotGetNews } from '../actions';

function* getPostSaga() {
  try {
    const { data: payload } = yield call(api.get, '/posts');
    yield put(gotPosts(payload));
  } catch ({ message }) {
    yield put(cannotGetNews(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(POSTS_REQUESTED, getPostSaga);
}
