import { profilePageActions } from './constants';

export const getProfile = id => ({
  type: profilePageActions.GET_PROFILE_REQUEST,
  playload: id,
});
