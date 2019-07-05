import { playlist } from '../constants/playing-list';
const defaultState = {
  id: '',
  name: '',
  musics: {},
  user: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case playlist.CHANGE_PLAYING_LIST:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.id,
        musics: action.payload.musics || {},
        user: action.payload.user || {},
      };
    default:
      return state;
  }
};
