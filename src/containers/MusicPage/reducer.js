import { musicPage } from './constants';

const defaultState = {
  music: {
    id: '',
    name: ``,
    singers: [],
    src: '',
    img: '',
    listenCount: 0,
    time: 0,
  },
  isMusicFetching: false,
  isMusicError: false,
  isMusicSuccess: false,

  // lyric
  lyric: {
    id: '',
    data: [],
  },
  isLyricFetching: false,
  isLyricError: false,
  isLyricSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case musicPage.GET_MUSIC_SUCCESS:
      return {
        ...state,
        music: {
          id: action.payload.id,
          name: action.payload.name,
          singers: action.payload.singers,
          src: action.payload.src,
          img: action.payload.img,
          listenCount: action.payload.listenCount,
          time: action.payload.time,
        },
        isMusicFetching: false,
        isMusicError: false,
        isMusicSuccess: true,
      };

    case musicPage.GET_MUSIC_REQUEST:
      return {
        ...state,
        isMusicFetching: true,
      };

    case musicPage.GET_MUSIC_FAILURE:
      return {
        ...state,
        music: defaultState.music,
        isMusicFetching: false,
        isMusicError: true,
        isMusicSuccess: false,
      };

    // LYRIC
    case musicPage.GET_LYRIC_SUCCESS:
      return {
        ...state,
        lyric: {
          id: action.payload.id,
          data: action.payload.data,
        },
        isLyricFetching: false,
        isLyricError: false,
        isLyricSuccess: true,
      };

    case musicPage.GET_LYRIC_REQUEST:
      return {
        ...state,
        isLyricFetching: true,
      };

    case musicPage.GET_LYRIC_FAILURE:
      return {
        ...state,
        lyric: defaultState.lyric,
        isLyricFetching: false,
        isLyricError: true,
        isLyricSuccess: false,
      };
    default:
      return state;
  }
};
