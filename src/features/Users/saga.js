import { put, select, takeLatest } from 'redux-saga/effects';
import { ADD_USER_REQUEST, addValidUser, addUserInvalid } from './ducks';
import { isEmailUnique } from './selectors';

function* validateFormSaga({ payload }) {
  try {
    const isUnicEmail = yield select(isEmailUnique, payload.email);
    if (isUnicEmail) {
      yield put(addValidUser(payload));
    } else {
      yield put(addUserInvalid());
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

export function* watchUsersSaga() {
  yield takeLatest(ADD_USER_REQUEST, validateFormSaga);
}
