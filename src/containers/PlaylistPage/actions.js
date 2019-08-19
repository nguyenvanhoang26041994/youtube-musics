import { playlistPage } from './constants';
import { fetchPlaylist } from './fetchs';

export const getPlaylistRequest = () => ({
  type: playlistPage.GET_PLAYLIST_REQUEST,
});

export const getPlaylistSuccess = payload => ({
  type: playlistPage.GET_PLAYLIST_SUCCESS,
  payload,
});

export const getPlaylistFailure = () => ({
  type: playlistPage.GET_PLAYLIST_FAILURE,
});

export const getPlaylist = (id, callback) => async (dispatch) => {
  dispatch(getPlaylistRequest());
  try {
    const profile = await fetchPlaylist(id);
    dispatch(getPlaylistSuccess(profile));
    callback && callback(profile);
  } catch (e) {
    dispatch(getPlaylistFailure());
  }
};
