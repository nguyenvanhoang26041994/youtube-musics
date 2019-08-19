import { musicPage } from './constants';
import { fetchMusic } from './fetchs';
import { cacheKey } from '../../libs/redux-cache';

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
  const state = getState();
  const key = `${musicPage.GET_MUSIC_SUCCESS}(${id})`;
  if (state.reduxCacheReducer[key]) {
    return dispatch(getMusicSuccess(state.reduxCacheReducer[key].payload));
  }

  dispatch(getMusicRequest());
  try {
    const music = await fetchMusic(id);
    dispatch(getMusicSuccess(music));
  } catch (e) {
    dispatch(getMusicFailure());
  }
};
