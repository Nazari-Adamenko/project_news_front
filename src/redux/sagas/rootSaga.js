import { all, call } from 'redux-saga/effects';

import postSaga from './postSaga';

export default function* rootSaga() {
  yield all([
    call(postSaga),
  ]);
}
