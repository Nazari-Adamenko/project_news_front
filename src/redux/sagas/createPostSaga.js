import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../../api/api';

import { CREATE_POST_REQUESTED, URL_FOR_POST } from '../../constants';
import {
  createGotPost,
  cannotCreatePost,
  getUserDataAuth,
} from '../actions';

const statusCreated = 'Created';

function* createPostSaga({ payload }) {
  const formData = new FormData();
  formData.append('image', payload.image);
  formData.append('title', payload.data.title);
  formData.append('tags', payload.data.tags);
  formData.append('content', payload.data.content);
  try {
    const data = yield call(
      api.post,
      URL_FOR_POST,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (data.statusText === statusCreated) {
      yield put(getUserDataAuth());
    }
    yield put(createGotPost(data));
  } catch ({ message }) {
    yield put(cannotCreatePost(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(CREATE_POST_REQUESTED, createPostSaga);
}
