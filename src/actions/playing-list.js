import { playlist } from '../constants/playing-list';

export const changeToNextMode = () => ({
  type: playlist.CHANGE_TO_NEXT_MODE,
});

export const changePlayingList = payload => ({
  payload,
  type: playlist.CHANGE_PLAYING_LIST,
});
