import { music } from '../constants/playing-music';

const defaultState = {
  id: '',
  src: '',
  name: '',
  singers: [],
  img: '',
  isPlaying: false,
  isPlayed: false,

  lyrics: [],
  isLyricsFetching: false,
  isLyricsError: false,
  isLyricsSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case music.RESET:
      return defaultState;
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
        lyrics: action.payload.lyrics || [],
      };
    // MUSIC WITH LYRICS
    case music.GET_MUSIC_WITH_LYRICS_SUCCESS:
      return {
        ...state,
        lyrics: action.payload.lyrics,
        isLyricsFetching: false,
        isLyricsError: false,
        isLyricsSuccess: true,
      };

    case music.GET_MUSIC_WITH_LYRICS_REQUEST:
      return {
        ...state,
        isTopicsFetching: true,
      };

    case music.GET_MUSIC_WITH_LYRICS_FAILURE:
      return {
        ...state,
        lyrics: defaultState.lyrics,
        isLyricsFetching: false,
        isLyricsError: true,
        isLyricsSuccess: false,
      };
    default:
      return state;
  }
};
