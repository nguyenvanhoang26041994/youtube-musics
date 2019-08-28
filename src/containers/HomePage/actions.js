import { homePage } from './constants';
import {
  fetchTrendingPlaylists,
  fetchTrendingSongs,
  fetchTrendingSingers,
  fetchTopics,
  fetchTopicMusics,
} from './fetchs';
import { cacheKey, getCacheStorage } from '../../libs/redux-cache';

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
  const dataFromCache = getCacheStorage(homePage.GET_TRENDING_PLAYLISTS_SUCCESS);
  if (dataFromCache) {
    return dispatch(getTrendingPlaylistsSuccess(dataFromCache.payload));
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
  const dataFromCache = getCacheStorage(homePage.GET_TRENDING_SONGS_SUCCESS);
  if (dataFromCache) {
    const songsFromCache = dataFromCache.payload;
    return dispatch(getTrendingSongsSuccess(songsFromCache));
  }

  dispatch(getTrendingSongsRequest());
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
  const dataFromCache = getCacheStorage(homePage.GET_TRENDING_SINGERS_SUCCESS);
  if (dataFromCache) {
    return dispatch(getTrendingSingersSuccess(dataFromCache.payload));
  }

  dispatch(getTrendingSingersRequest());
  try {
    const singers = await fetchTrendingSingers(params);
    dispatch(getTrendingSingersSuccess(singers));
  } catch (e) {
    dispatch(getTrendingSingersFailure());
  }
};


// Topics
export const getTopicsRequest = () => ({
  type: homePage.GET_TOPICS_REQUEST,
});

export const getTopicsSuccess = payload => {
  const type = homePage.GET_TOPICS_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: type,
  };
};

export const getTopicsFailure = () => ({
  type: homePage.GET_TOPICS_FAILURE,
});

export const getTopics = (params) => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(homePage.GET_TOPICS_SUCCESS);
  if (dataFromCache) {
    return dispatch(getTopicsSuccess(dataFromCache.payload));
  }

  dispatch(getTopicsRequest());
  try {
    const topics = await fetchTopics(params);
    return dispatch(getTopicsSuccess(topics));
  } catch (e) {
    dispatch(getTopicsFailure());
  }
};

// Topic Musics
export const getTopicMusicsRequest = () => ({
  type: homePage.GET_TOPIC_MUSICS_REQUEST,
});

export const getTopicMusicsSuccess = (payload, belongTo) => {
  const type = homePage.GET_TOPIC_MUSICS_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: `${type}(${belongTo})`,
  };
};

export const getTopicMusicsFailure = () => ({
  type: homePage.GET_TOPIC_MUSICS_FAILURE,
});

export const getTopicMusics = id => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(`${homePage.GET_TOPIC_MUSICS_SUCCESS}(${id})`);
  if (dataFromCache) {
    return dispatch(getTopicMusicsSuccess(dataFromCache.payload, id));
  }

  dispatch(getTopicMusicsRequest());
  try {
    const musics = await fetchTopicMusics(id);
    dispatch(getTopicMusicsSuccess(musics, id));
  } catch (e) {
    dispatch(getTopicMusicsFailure());
  }
};
