import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_ASYNC,
  COUNTER_DECREMENT_ASYNC
} from './actionTypes';

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: COUNTER_INCREMENT });
}

export function* decrementAsync() {
  yield call(delay, 1000);
  yield put({ type: COUNTER_DECREMENT });
}

export function* watchIncrementAsync() {
  yield takeEvery(COUNTER_INCREMENT_ASYNC, incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery(COUNTER_DECREMENT_ASYNC, decrementAsync);
}

export function* watchCounterSagas() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
