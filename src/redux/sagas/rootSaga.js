import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import authSaga from './authSaga';
import loggedOutSaga from './loggedOutSaga';
import userAuthSaga from './userAuthSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    authSaga(),
    loggedOutSaga(),
    userAuthSaga(),
    userSaga(),
  ]);
}
