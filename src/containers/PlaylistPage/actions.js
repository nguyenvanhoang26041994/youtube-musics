import { playlistPage } from './constants';
import { fetchPlaylist } from './fetchs';
import { cacheKey, getCacheStorage } from '../../libs/redux-cache';

export const getPlaylistRequest = () => ({
  type: playlistPage.GET_PLAYLIST_REQUEST,
});

export const getPlaylistSuccess = payload => {
  const type = playlistPage.GET_PLAYLIST_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: `${type}(${payload.id})`,
  }
};

export const getPlaylistFailure = () => ({
  type: playlistPage.GET_PLAYLIST_FAILURE,
});

export const getPlaylist = (id) => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(`${playlistPage.GET_PLAYLIST_SUCCESS}(${id})`);
  if (dataFromCache) {
    return dispatch(getPlaylistSuccess(dataFromCache.payload));
  }

  dispatch(getPlaylistRequest());
  try {
    const profile = await fetchPlaylist(id);
    dispatch(getPlaylistSuccess(profile));
  } catch (e) {
    dispatch(getPlaylistFailure());
  }
};
