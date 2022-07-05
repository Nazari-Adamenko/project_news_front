import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import authSaga from './authSaga';
import loggedOutSaga from './loggedOutSaga';
import userAuthSaga from './userAuthSaga';
import userSaga from './userSaga';
import createPost from './createPostSaga';
import changeUserSaga from './changeUserSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    authSaga(),
    loggedOutSaga(),
    userAuthSaga(),
    userSaga(),
    createPost(),
    changeUserSaga(),
  ]);
}
