import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import authSaga from './authSaga';
import loggedOutSaga from './loggedOutSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    authSaga(),
    loggedOutSaga(),
  ]);
}
