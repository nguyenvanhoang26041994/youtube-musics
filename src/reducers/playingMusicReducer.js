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
        ...action.payload,
      };
    default:
      return state;
  }
};
