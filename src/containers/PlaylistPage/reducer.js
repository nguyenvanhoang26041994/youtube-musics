import { playlistPage } from './constants';

const defaultState = {
  playlist: {
    id: '',
    name: '',
    musics: [],
    user: {
      name: '',
      id: '',
    },
  },
  isPlaylistFetching: false,
  isPlaylistError: false,
  isPlaylistSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case playlistPage.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        playlist: {
          id: action.payload.id,
          name: action.payload.name,
          musics: action.payload.musics,
          user: action.payload.user || {},
        },
        isPlaylistFetching: false,
        isPlaylistError: false,
        isPlaylistSuccess: true,
      };

    case playlistPage.GET_PLAYLIST_REQUEST:
      return {
        ...state,
        isPlaylistFetching: true,
      };

    case playlistPage.GET_PLAYLIST_FAILURE:
      return {
        ...state,
        playlist: defaultState.playlist,
        isPlaylistFetching: false,
        isPlaylistError: true,
        isPlaylistSuccess: false,
      };
    default:
      return state;
  }
};
