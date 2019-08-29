import { music } from '../constants/playing-music';
import { fetchMusicWithLyrics } from '../fetchs';
import { cacheKey, getCacheStorage } from '../libs/redux-cache';

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


export const getMusicWithLyricsRequest = () => ({
  type: music.GET_MUSIC_WITH_LYRICS_REQUEST,
});

export const getMusicWithLyricsSuccess = (payload, belongTo) => {
  const type = music.GET_MUSIC_WITH_LYRICS_SUCCESS;
  return {
    payload,
    type,
    [cacheKey]: `GLOBAL_LYRICS(${belongTo})`,
  }
};

export const getMusicWithLyricsFailure = () => ({
  type: music.GET_MUSIC_WITH_LYRICS_FAILURE,
});

export const getMusicWithLyrics = id => async (dispatch, getState) => {
  const dataFromCache = getCacheStorage(`GLOBAL_LYRICS(${id})`);
  if (dataFromCache) {
    return dispatch(getMusicWithLyricsSuccess(dataFromCache.payload, id));
  }

  dispatch(getMusicWithLyricsRequest());
  try {
    const music = await fetchMusicWithLyrics(id);
    dispatch(getMusicWithLyricsSuccess(music, id));
  } catch (e) {
    dispatch(getMusicWithLyricsFailure());
  }
};
