import { music } from '../constants/playing-music';

export const reset = () => ({
  type: music.RESET,
});

export const changeIsPlaying = isPlaying => ({
  type: music.CHANGE_IS_PLAYING,
  payload: isPlaying,
});

export const changeMusic = payload => ({
  type: music.CHANGE_MUSIC,
  payload,
});
