import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import SongCard from '../../containers/SongCard';
import SongCardSkeleton from '../../components/SongCard/Skeleton';
import Panel from './Panel';

import withPlayerActions from '../../HOC/withPlayerActions';
import withMobileLayout from '../../HOC/withMobileLayout';

import musicsFormater from '../../selectors/utils/musicsFormater';
import playlistsFormater from '../../selectors/utils/playlistsFormater';
import * as actionCreators from './actions';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }
  }
`;

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, loaders }) => {
  return (
    <HomePageWrapper id="home-page" className="home-page home-page-mobile">
      <Panel className="mb-10" title="HOT & NEW SONGS">
        {!loaders.isTrendingSongsFetching && fp.take(10, trendingSongs).map(song => (
          <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={song.id}>
            <SongCard
              className="w-full"
              {...song}
            />
          </div>
        ))}
        {loaders.isTrendingSongsFetching && fp.times(String, 10).map(idx => (
          <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={idx}>
            <SongCardSkeleton className="w-full" />
          </div>
        ))}
      </Panel>
    </HomePageWrapper>
  );
};

const HomePageEnhancer = compose(
  connect(state => ({
    trendingPlaylists: playlistsFormater(state.homePageReducer.trendingPlaylists),
    trendingSongs: musicsFormater(state.homePageReducer.trendingSongs),
    trendingSingers: state.homePageReducer.trendingSingers,
    loaders: {
      isTrendingPlaylistsFetching: state.homePageReducer.isTrendingPlaylistsFetching,
      isTrendingSongsFetching: state.homePageReducer.isTrendingSongsFetching,
      isTrendingSingersFetching: state.homePageReducer.isTrendingSingersFetching,
    },
  })),
  withPlayerActions,
  withMobileLayout,
)(HomePage);

HomePageEnhancer.getInitialProps = async ({ query, reduxStore: store, isServer }) => {
  const callApiStack = [
    store.dispatch(actionCreators.getTrendingPlaylists()),
    store.dispatch(actionCreators.getTrendingSongs()),
    store.dispatch(actionCreators.getTrendingSingers()),
  ];

  // in client-side await will be stop render
  if (isServer) {
    await Promise.all(callApiStack);
  }

  return {};
}

export default HomePageEnhancer;
