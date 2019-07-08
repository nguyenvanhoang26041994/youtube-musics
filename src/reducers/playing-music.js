import { music, mode } from '../constants/playing-music';

const defaultState = {
  id: 'id_edm',
  src: '/static/musics/edm-lol.mp3',
  name: 'EDM Bất hủ cho dân cày liên minh',
  singer: {
    id: 'uid_edm-001',
    name: 'EDM God',
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
