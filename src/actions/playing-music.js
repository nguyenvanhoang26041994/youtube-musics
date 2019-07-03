import { music } from '../constants/playing-music';

export const changeIsPlaying = isPlaying => ({
  type: music.CHANGE_IS_PLAYING,
  payload: isPlaying,
});

export const changeMusic = ({ id, src, name, singer = {} }) => ({
  type: music.CHANGE_MUSIC,
  payload: {
    id,
    src,
    name,
    singer,
  },
});
