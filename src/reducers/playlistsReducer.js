import playlists from '../data/playlists';

const defaultState = {
  playlists: playlists,
  isFetching: false,
  isFetched: false,
  isError: false,
  isSuccess: false,
};

export default (state = defaultState, action) => {
  return state;
}
