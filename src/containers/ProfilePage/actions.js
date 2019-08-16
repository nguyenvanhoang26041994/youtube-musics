import { profilePage } from './constants';

export const getProfileRequest = id => ({
  type: profilePage.GET_PROFILE_REQUEST,
  payload: id,
});

export const getProfileSuccess = payload => ({
  type: profilePage.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFailure = payload => ({
  type: profilePage.GET_PROFILE_FAILURE,
});
