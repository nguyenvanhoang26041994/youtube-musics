import { music, mode } from '../constants/playing-music';

const defaultState = {
  id: '',
  src: '',
  name: 'Hãy trao cho anh',
  singer: {
    name: 'Sơn Tùng M-TP',
  },
  mode: mode.LOOP,
  isPlaying: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case music.CHANGE_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case music.CHANGE_MUSIC:
      return {
        ...state,
        id: action.payload.id,
        src: action.payload.src,
        name: action.payload.name,
        singer: action.payload.singer || {},
      };
    default:
      return state;
  }
};
