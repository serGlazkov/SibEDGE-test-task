import { all, fork } from 'redux-saga/effects';
import { watchUsersSaga } from './features/Users';

export function* rootSaga() {
  yield all([watchUsersSaga].map(saga => fork(saga)));
}
