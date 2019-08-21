import { profilePage } from './constants';
import { fetchProfile, fetchOwnerMusics } from './fetchs';
import { cacheKey, getCacheStorage } from '../../libs/redux-cache';

export const getProfileRequest = () => ({
  type: profilePage.GET_PROFILE_REQUEST,
});

export const getProfileSuccess = payload => {
  const type = profilePage.GET_PROFILE_SUCCESS;
  return {
    type,
    payload,
    [cacheKey]: `${type}(${payload.id})`,
  };
}

export const getProfileFailure = () => ({
  type: profilePage.GET_PROFILE_FAILURE,
});

export const getProfile = (id) => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(`${profilePage.GET_PROFILE_SUCCESS}(${id})`);
  if (dataFromCache) {
    return dispatch(getProfileSuccess(dataFromCache.payload));
  }

  dispatch(getProfileRequest());
  try {
    const profile = await fetchProfile(id);
    dispatch(getProfileSuccess(profile));
  } catch (e) {
    dispatch(getProfileFailure());
  }
};

export const getOwnerMusicsRequest = () => ({
  type: profilePage.GET_OWNER_MUSICS_REQUEST,
});

export const getOwnerMusicsSuccess = (payload, belongTo) => {
  const type = profilePage.GET_OWNER_MUSICS_SUCCESS;
  return {
    type,
    payload,
    [cacheKey]: `${type}(${belongTo})`,
  }
};

export const getOwnerMusicsFailure = () => ({
  type: profilePage.GET_OWNER_MUSICS_FAILURE,
});

export const getOwnerMusics = (id) => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(`${profilePage.GET_OWNER_MUSICS_SUCCESS}(${id})`);
  if (dataFromCache) {
    return dispatch(getOwnerMusicsSuccess(dataFromCache.payload), id);
  }

  dispatch(getOwnerMusicsRequest());
  try {
    const musics = await fetchOwnerMusics(id);
    dispatch(getOwnerMusicsSuccess(musics, id));
  } catch (e) {
    dispatch(getOwnerMusicsFailure());
  }
};
