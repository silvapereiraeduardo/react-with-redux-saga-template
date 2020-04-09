import { all } from 'redux-saga/effects';

import { watchCounterSagas } from './counter/sagas';

export default function* rootSaga() {
  yield all([watchCounterSagas()]);
}
