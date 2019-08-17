import { homePage } from './constants';
import { fetchTrendingPlaylists, fetchTrendingSongs, fetchTrendingSingers } from './fetchs';

export const getTrendingPlaylistsRequest = () => ({
  type: homePage.GET_TRENDING_PLAYLISTS_REQUEST,
});

export const getTrendingPlaylistsSuccess = payload => ({
  type: homePage.GET_TRENDING_PLAYLISTS_SUCCESS,
  payload,
});

export const getTrendingPlaylistsFailure = () => ({
  type: homePage.GET_TRENDING_PLAYLISTS_FAILURE,
});

export const getTrendingPlaylists = (params, callback) => async ({ dispatch }) => {
  dispatch(getTrendingPlaylistsRequest());
  try {
    const playlists = await fetchTrendingPlaylists(params);
    dispatch(getTrendingPlaylistsSuccess(playlists));
    callback && callback(playlists);
  } catch (e) {
    dispatch(getTrendingPlaylistsFailure());
  }
};

export const getTrendingSongsRequest = () => ({
  type: homePage.GET_TRENDING_SONGS_REQUEST,
});

export const getTrendingSongsSuccess = payload => ({
  type: homePage.GET_TRENDING_SONGS_SUCCESS,
  payload,
});

export const getTrendingSongsFailure = () => ({
  type: homePage.GET_TRENDING_SONGS_FAILURE,
});

export const getTrendingSongs = (params, callback) => async ({ dispatch }) => {
  dispatch(getTrendingPlaylistsRequest());
  try {
    const songs = await fetchTrendingSongs(params);
    dispatch(getTrendingSongsSuccess(songs));
    callback && callback(songs);
  } catch (e) {
    dispatch(getTrendingSongsFailure());
  }
};

export const getTrendingSingersRequest = () => ({
  type: homePage.GET_TRENDING_SINGERS_REQUEST,
});

export const getTrendingSingersSuccess = payload => ({
  type: homePage.GET_TRENDING_SINGERS_SUCCESS,
  payload,
});

export const getTrendingSingersFailure = () => ({
  type: homePage.GET_TRENDING_SINGERS_FAILURE,
});

export const getTrendingSingers = (params, callback) => async ({ dispatch }) => {
  dispatch(getTrendingSingersRequest());
  try {
    const singers = await fetchTrendingSingers(params);
    dispatch(getTrendingSingersSuccess(singers));
    callback && callback(singers);
  } catch (e) {
    dispatch(getTrendingSingersFailure());
  }
};
