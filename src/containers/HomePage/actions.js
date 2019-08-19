import { homePage } from './constants';
import { fetchTrendingPlaylists, fetchTrendingSongs, fetchTrendingSingers } from './fetchs';
import { cacheKey } from '../../libs/redux-cache';

export const getTrendingPlaylistsRequest = () => ({
  type: homePage.GET_TRENDING_PLAYLISTS_REQUEST,
});

export const getTrendingPlaylistsSuccess = payload => {
  const type = homePage.GET_TRENDING_PLAYLISTS_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: type,
  }
};

export const getTrendingPlaylistsFailure = () => ({
  type: homePage.GET_TRENDING_PLAYLISTS_FAILURE,
});

export const getTrendingPlaylists = (params) => async (dispatch, getState) => {
  const state = getState();
  const key = homePage.GET_TRENDING_PLAYLISTS_SUCCESS;
  if (state.reduxCacheReducer[key]) {
    return dispatch(getTrendingPlaylistsSuccess(state.reduxCacheReducer[key].payload));
  }

  dispatch(getTrendingPlaylistsRequest());
  try {
    const playlists = await fetchTrendingPlaylists(params);
    dispatch(getTrendingPlaylistsSuccess(playlists));
  } catch (e) {
    dispatch(getTrendingPlaylistsFailure());
  }
};

export const getTrendingSongsRequest = () => ({
  type: homePage.GET_TRENDING_SONGS_REQUEST,
});

export const getTrendingSongsSuccess = payload => {
  const type = homePage.GET_TRENDING_SONGS_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: type,
  };
};

export const getTrendingSongsFailure = () => ({
  type: homePage.GET_TRENDING_SONGS_FAILURE,
});

export const getTrendingSongs = (params) => async (dispatch, getState) => {
  const state = getState();
  const key = homePage.GET_TRENDING_SONGS_SUCCESS;
  if (state.reduxCacheReducer[key]) {
    const songsFromCache = state.reduxCacheReducer[key].payload;
    return dispatch(getTrendingSongsSuccess(songsFromCache));
  }

  dispatch(getTrendingPlaylistsRequest());
  try {
    const songs = await fetchTrendingSongs(params);
    dispatch(getTrendingSongsSuccess(songs));
  } catch (e) {
    dispatch(getTrendingSongsFailure());
  }
};

export const getTrendingSingersRequest = () => ({
  type: homePage.GET_TRENDING_SINGERS_REQUEST,
});

export const getTrendingSingersSuccess = payload => {
  const type = homePage.GET_TRENDING_SINGERS_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: type,
  };
};

export const getTrendingSingersFailure = () => ({
  type: homePage.GET_TRENDING_SINGERS_FAILURE,
});

export const getTrendingSingers = (params) => async (dispatch, getState) => {
  const state = getState();
  const key = homePage.GET_TRENDING_SINGERS_SUCCESS;
  if (state.reduxCacheReducer[key]) {
    return dispatch(getTrendingSingersSuccess(state.reduxCacheReducer[key].payload));
  }

  dispatch(getTrendingSingersRequest());
  try {
    const singers = await fetchTrendingSingers(params);
    dispatch(getTrendingSingersSuccess(singers));
  } catch (e) {
    dispatch(getTrendingSingersFailure());
  }
};
