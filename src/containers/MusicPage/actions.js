import { musicPage } from './constants';
import { fetchMusic, fetchLyric } from './fetchs';
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

// LYRIC
export const getLyricRequest = () => ({
  type: musicPage.GET_LYRIC_REQUEST,
});

export const getLyricSuccess = (payload, belongTo) => {
  const type = musicPage.GET_LYRIC_SUCCESS;

  return {
    payload,
    type,
    [cacheKey]: `${type}(${belongTo})`,
  };
};

export const getLyricFailure = () => ({
  type: musicPage.GET_LYRIC_FAILURE,
});

export const getLyric = id => async (dispatch, getState) => {
  const state = getState();
  const key = `${musicPage.GET_LYRIC_SUCCESS}(${id})`;
  if (state.reduxCacheReducer[key]) {
    return dispatch(getLyricSuccess(state.reduxCacheReducer[key].payload, id));
  }

  dispatch(getLyricRequest());
  try {
    const lyric = await fetchLyric(id);
    dispatch(getLyricSuccess(lyric, id));
  } catch (e) {
    dispatch(getLyricFailure());
  }
};
