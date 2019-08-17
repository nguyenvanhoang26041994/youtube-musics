import { musicPage } from './constants';
import { fetchMusic } from './fetchs';
export const getMusicRequest = () => ({
  type: musicPage.GET_MUSIC_REQUEST,
});

export const getMusicSuccess = payload => ({
  type: musicPage.GET_MUSIC_SUCCESS,
  payload,
});

export const getMusicFailure = () => ({
  type: musicPage.GET_MUSIC_FAILURE,
});

export const getMusic = (id, callback) => async ({ dispatch }) => {
  dispatch(getMusicRequest());
  try {
    const music = await fetchMusic(id);
    dispatch(getMusicSuccess(music));
    callback && callback(music);
  } catch (e) {
    dispatch(getMusicFailure());
  }
};
