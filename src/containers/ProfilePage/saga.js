import { takeEvery, put, call } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { profilePage } from './constants';
import { getProfileSuccess } from './actions';

import { fetchProfile } from './fetchs';

function* getProfile() {
  const profile = yield call(fetchProfile);
  console.log('profile', profile);
  yield put(getProfileSuccess(profile));
}

export default function* () {
  yield takeEvery(profilePage.GET_PROFILE_REQUEST, getProfile);
}
