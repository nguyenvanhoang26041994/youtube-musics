import { takeEvery, put, fork } from 'redux-saga/effects';
import { profilePageActions } from './constants';

function* getProfile() {
  console.log(2);
}

export default function* () {
  yield fork(
    yield takeEvery(profilePageActions.GET_PROFILE_REQUEST, getProfile),
  );
}
