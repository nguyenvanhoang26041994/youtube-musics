import { playlist } from '../constants/playing-list';

export const changeMode = payload => ({
  payload,
  type: playlist.CHANGE_MODE,
});

export const changeToNextMode = () => ({
  type: playlist.CHANGE_TO_NEXT_MODE,
});

export const changePlayingList = payload => ({
  payload,
  type: playlist.CHANGE_PLAYING_LIST,
});
