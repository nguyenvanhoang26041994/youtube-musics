import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import { Button } from '../../components/core';
import MusicCard from '../../containers/MusicCard';
import PlaylistCard from '../../containers/PlaylistCard';
import SingerCard from '../../components/SingerCard';
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

const PanelWrapper = styled.section``;
const Panel = ({ title, children }) => {
  return (
    <PanelWrapper className="w-full flex flex-col">
      <h2 className="text-gray-900 font-bold text-sm mb-2 px-2">
        {title}
      </h2>
      <div className="flex w-full flex-wrap">
        {children}
      </div>
    </PanelWrapper>
  );
}

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, playerActions, loaders }) => {
  return (
    <HomePageWrapper id="home-page" className="home-page home-page-mobile">
      <div className="h-12" />
      <Panel title="Hot & Trending Music">
        {!loaders.isTrendingSongsFetching && fp.take(4, trendingSongs).map(song => (
          <div className="w-1/2 p-1" key={song.id}>
            <MusicCard
              className="w-full z-10"
              {...song}
            />
          </div>
        ))}
      </Panel>
      <Panel className="mb-10" title="Cool playlist">
        {!loaders.isTrendingPlaylistsFetching && fp.take(2, trendingPlaylists).map(playlist => (
          <div className="w-1/2 p-1" key={playlist.id}>
            <PlaylistCard
              className="w-full z-10"
              {...playlist}
            />
          </div>
        ))}
      </Panel>
      <Panel className="mb-10" title="Treding singer">
        {!loaders.isTrendingSingersFetching && fp.take(3, trendingSingers).map(singer => (
          <div className="w-1/3 p-1" key={singer.id}>
            <SingerCard
              className="w-full"
              {...singer}
            />
          </div>
        ))}
        {loaders.isTrendingSingersFetching && fp.times(String, 5).map(idx => (
          <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={idx}>
            <SingerCardSkeleton className="w-full" />
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
