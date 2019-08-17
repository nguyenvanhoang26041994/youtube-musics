import { playlist, mode } from '../constants/playing-list';

const nextMode = Object.freeze({
  [mode.LOOP]: mode.SHUFFLE,
  [mode.SHUFFLE]: mode.REPEAT,
  [mode.REPEAT]: mode.LOOP,
});


const defaultState = {
  id: '',
  name: '',
  musics: [],
  user: {},
  mode: mode.LOOP,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case playlist.CHANGE_PLAYING_LIST:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        musics: action.payload.musics,
        user: action.payload.user,
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
