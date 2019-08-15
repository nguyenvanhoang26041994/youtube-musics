import fp from 'lodash/fp';
import { mode } from '../constants/playing-list';
import { changeMusic } from '../actions/playing-music';
import { changePlayingList } from './playing-list';

export const goNextSong = () => ({ dispatch, getState }) => {
  const state = getState();
  const musics = state.playingList.musics;
  const idx = fp.findIndex(music => music.id === state.playingMusic.id, musics);

  switch(state.playingList.mode) {
    case mode.REPEAT: {
      break;
    }

    case mode.LOOP: {
      if (musics.length && musics.length === idx + 1) {
        return dispatch(changeMusic(musics[0]));
      }

      return dispatch(changeMusic(musics[idx + 1]));
    }

    case mode.SHUFFLE: {
      return dispatch(changeMusic(musics[fp.random(i => i)(musics.length - 1)]));
    }

    default:
      break;
  }
};

export const goPrevSong = () => ({ dispatch, getState }) => {
  const state = getState();
  const musics = state.playingList.musics;
  const idx = fp.findIndex(music => music.id === state.playingMusic.id, musics);

  switch(state.playingList.mode) {
    case mode.REPEAT: {
      break;
    }

    case mode.LOOP: {
      if (idx === 0) {
        return dispatch(changeMusic(musics[musics.length - 1]));
      }

      return dispatch(changeMusic(musics[idx - 1]));
    }

    case mode.SHUFFLE: {
      return dispatch(changeMusic(musics[fp.random(i => i)(musics.length - 1)]));
    }

    default:
      break;
  }
};

export const playPlaylist = payload => ({ dispatch }) => {
  dispatch(changePlayingList(payload));
  if (payload && payload.musics) {
    dispatch(changeMusic(payload.musics[0]));
  }
};
