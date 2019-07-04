import { music, mode } from '../constants/playing-music';

const defaultState = {
  id: '',
  src: '',
  name: '',
  singer: {},
  img: '',
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
        img: action.payload.img,
        singer: action.payload.singer || {},
      };
    default:
      return state;
  }
};
