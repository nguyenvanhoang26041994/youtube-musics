import { playlistPage } from './constants';
import { fetchPlaylist } from './fetchs';
import { cacheKey } from '../../libs/redux-cache';

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
  const state = getState();
  const key = `${playlistPage.GET_PLAYLIST_SUCCESS}(${id})`;
  if (state.reduxCacheReducer[key]) {
    return dispatch(getPlaylistSuccess(state.reduxCacheReducer[key].payload));
  }

  dispatch(getPlaylistRequest());
  try {
    const profile = await fetchPlaylist(id);
    dispatch(getPlaylistSuccess(profile));
  } catch (e) {
    dispatch(getPlaylistFailure());
  }
};
