import { playlist, mode } from '../constants/playing-list';
import { playlistsAsObject } from '../data/playlists';

const nextMode = Object.freeze({
  [mode.LOOP]: mode.SHUFFLE,
  [mode.SHUFFLE]: mode.REPEAT,
  [mode.REPEAT]: mode.LOOP,
});


const defaultState = {
  ...playlistsAsObject['playlist-001'],
  mode: mode.LOOP,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case playlist.CHANGE_PLAYING_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case playlist.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case playlist.CHANGE_TO_NEXT_MODE:
      return {
        ...state,
        mode: nextMode[state.mode] || state.mode,
      };
    default:
      return state;
  }
};
