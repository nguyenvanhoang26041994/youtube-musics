import { takeEvery, put } from 'redux-saga/effects';

function* logName() {
  yield put({ type: 'CHANGE_USER_NAME', payload: 'Hoang Nguyen' });
}

export default function* () {
  yield takeEvery('LOG', logName);
}
