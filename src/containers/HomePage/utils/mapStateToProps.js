import musicsFormater from '../../../selectors/utils/musicsFormater';
import playlistsFormater from '../../../selectors/utils/playlistsFormater';

export default state => ({
  trendingPlaylists: playlistsFormater(state.homePageReducer.trendingPlaylists),
  trendingSongs: musicsFormater(state.homePageReducer.trendingSongs),
  trendingSingers: state.homePageReducer.trendingSingers,
  topics: state.homePageReducer.topics,
  topicMusics: musicsFormater(state.homePageReducer.topicMusics),
  loaders: {
    isTrendingPlaylistsFetching: state.homePageReducer.isTrendingPlaylistsFetching,
    isTrendingSongsFetching: state.homePageReducer.isTrendingSongsFetching,
    isTrendingSingersFetching: state.homePageReducer.isTrendingSingersFetching,
  },
});
