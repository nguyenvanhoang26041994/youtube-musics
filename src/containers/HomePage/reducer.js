import { homePage } from './constants';

const defaultState = {
  trendingPlaylists: [],
  isTrendingPlaylistsFetching: false,
  isTrendingPlaylistsError: false,
  isTrendingPlaylistsSuccess: false,

  trendingSongs: [],
  isTrendingSongsFetching: false,
  isTrendingSongsError: false,
  isTrendingSongsSuccess: false,

  trendingSingers: [],
  isTrendingSingersFetching: false,
  isTrendingSingersError: false,
  isTrendingSingersSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    // TRENDING PLAYLISTS
    case homePage.GET_TRENDING_PLAYLISTS_SUCCESS:
      return {
        ...state,
        trendingPlaylists: action.payload,
        isTrendingPlaylistsFetching: false,
        isTrendingPlaylistsError: false,
        isTrendingPlaylistsSuccess: true,
      };

    case homePage.GET_TRENDING_PLAYLISTS_REQUEST:
      return {
        ...state,
        isTrendingPlaylistsFetching: true,
      };

    case homePage.GET_TRENDING_PLAYLISTS_FAILURE:
      return {
        ...state,
        trendingPlaylists: defaultState.trendingPlaylists,
        isTrendingPlaylistsFetching: false,
        isTrendingPlaylistsError: true,
        isTrendingPlaylistsSuccess: false,
      };

      // TRENDING SONGS
    case homePage.GET_TRENDING_SONGS_SUCCESS:
      return {
        ...state,
        trendingSongs: action.payload,
        isTrendingSongsFetching: false,
        isTrendingSongsError: false,
        isTrendingSongsSuccess: true,
      };

    case homePage.GET_TRENDING_SONGS_REQUEST:
      return {
        ...state,
        isTrendingSongsFetching: true,
      };

    case homePage.GET_TRENDING_SONGS_FAILURE:
      return {
        ...state,
        trendingSongs: defaultState.trendingSongs,
        isTrendingSongsFetching: false,
        isTrendingSongsError: true,
        isTrendingSongsSuccess: false,
      };

      // TRENDING SINGERS
    case homePage.GET_TRENDING_SINGERS_SUCCESS:
      return {
        ...state,
        trendingSingers: action.payload,
        isTrendingSingersFetching: false,
        isTrendingSingersError: false,
        isTrendingSingersSuccess: true,
      };

    case homePage.GET_TRENDING_SINGERS_REQUEST:
      return {
        ...state,
        isTrendingSingersFetching: true,
      };

    case homePage.GET_TRENDING_SINGERS_FAILURE:
      return {
        ...state,
        trendingSingers: defaultState.trendingSingers,
        isTrendingSingersFetching: false,
        isTrendingSingersError: true,
        isTrendingSingersSuccess: false,
      };
    default:
      return state;
  }
};
