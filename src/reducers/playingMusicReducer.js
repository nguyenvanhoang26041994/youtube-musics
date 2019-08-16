import { music } from '../constants/playing-music';

const defaultState = {
  id: '',
  src: '',
  name: '',
  singers: [],
  img: '',
  isPlaying: false,
  isPlayed: false,
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
        singers: action.payload.singers,
        img: action.payload.img,
      };
    default:
      return state;
  }
};
