import fp from 'lodash/fp';
import { mode } from '../constants/playing-list';
import { changeMusic, reset as resetPlayingMusic } from '../actions/playing-music';
import { changePlayingList, changeMode, reset as resetPlayinglist } from './playing-list';

export const goNextSong = () => (dispatch, getState) => {
  const state = getState();
  const musics = state.playingList.musics;

  if (!musics.length) {
    return;
  }

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

export const goPrevSong = () => (dispatch, getState) => {
  const state = getState();
  const musics = state.playingList.musics;

  if (!musics.length) {
    return;
  }

  const idx = fp.findIndex(music => music.id === state.playingMusic.id, musics) || 0;

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

// Play all song in playlist, first song will be play first
export const playPlaylist = payload => dispatch => {
  dispatch(changePlayingList(payload));
  if (payload && payload.musics && payload.musics[0]) {
    dispatch(changeMusic(payload.musics[0]));
    dispatch(changeMode(mode.LOOP));
  }
};

// Just play one song
export const playMusic = payload => (dispatch) => {
  dispatch(changeMusic(payload));
  dispatch(changeMode(mode.REPEAT));
};

// Just play one song but also reset playinglist
export const playMusicAndResetPlayingList = payload => dispatch => {
  dispatch(changeMusic(payload));
  dispatch(resetPlayinglist());
  dispatch(changeMode(mode.REPEAT));
};

// close player
export const resetPlayinglistAndPlayingMusic = () => dispatch => {
  dispatch(resetPlayingMusic());
  dispatch(resetPlayinglist());
};
