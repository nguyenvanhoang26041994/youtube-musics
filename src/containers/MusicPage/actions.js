import { musicPage } from './constants';
import { fetchMusic } from './fetchs';
import { cacheKey, getCacheStorage } from '../../libs/redux-cache';

export const getMusicRequest = () => ({
  type: musicPage.GET_MUSIC_REQUEST,
});

export const getMusicSuccess = payload => {
  const type = musicPage.GET_MUSIC_SUCCESS;

  return {
    payload,
    type,
    [cacheKey]: `${type}(${payload.id})`,
  };
};

export const getMusicFailure = () => ({
  type: musicPage.GET_MUSIC_FAILURE,
});

export const getMusic = id => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(`${musicPage.GET_MUSIC_SUCCESS}(${id})`);
  if (dataFromCache) {
    return dispatch(getMusicSuccess(dataFromCache.payload));
  }

  dispatch(getMusicRequest());
  try {
    const music = await fetchMusic(id);
    dispatch(getMusicSuccess(music));
  } catch (e) {
    dispatch(getMusicFailure());
  }
};
