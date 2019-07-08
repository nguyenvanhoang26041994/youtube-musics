import { music, mode } from '../constants/playing-music';

const defaultState = {
  id: 'id_001',
  src: '/static/musics/sao-em-vo-tinh.mp3',
  name: 'Sao em vô tình',
  singer: {
    id: 'uid_jack-001',
    name: 'Jack',
  },
  img: '/static/img/bg-blur.jpg',
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
