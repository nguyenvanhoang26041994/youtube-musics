import { profilePage } from './constants';
import { fetchProfile } from './fetchs';

export const getProfileRequest = () => ({
  type: profilePage.GET_PROFILE_REQUEST,
});

export const getProfileSuccess = payload => ({
  type: profilePage.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFailure = () => ({
  type: profilePage.GET_PROFILE_FAILURE,
});

export const getProfile = (id) => async ({ dispatch }) => {
  dispatch(getProfileRequest());
  try {
    const profile = await fetchProfile(id);
    dispatch(getProfileSuccess(profile));
  } catch (e) {
    dispatch(getProfileFailure());
  }
}
