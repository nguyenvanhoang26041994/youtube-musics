import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import withPlayerActions from '../../HOC/withPlayerActions';
import PlaylistCard from '../../containers/PlaylistCard';
import SongCard from '../../containers/SongCard';
import SingerCard from '../../components/SingerCard';
import Panel from './Panel';

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

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers }) => {
  return (
    <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col animated fadeIn">
      <Panel className="mb-10" title="HOT & NEW SONGS">
        {fp.take(10, trendingSongs).map(song => (
          <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={song.id}>
            <SongCard
              className="w-full"
              {...song}
            />
          </div>
        ))}
      </Panel>
      <Panel className="mb-10" title="COOL PLAYLIST">
        {fp.take(5, trendingPlaylists).map(playlist => (
          <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={playlist.id}>
            <PlaylistCard
              className="w-full"
              {...playlist}
            />
          </div>
        ))}
      </Panel>
      <Panel className="mb-10" title="TRENDING SINGER">
        {fp.take(5, trendingSingers).map(singer => (
          <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={singer.id}>
            <SingerCard
              className="w-full"
              {...singer}
            />
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
  })),
  withPlayerActions,
)(HomePage);

HomePageEnhancer.getInitialProps = async ({ query, reduxStore: store, isSever }) => {
  const callApiStack = [
    store.dispatch(actionCreators.getTrendingPlaylists()),
    store.dispatch(actionCreators.getTrendingSongs()),
    store.dispatch(actionCreators.getTrendingSingers()),
  ];

  // in client-side await will be stop render
  if (isSever) {
    await Promise.all(callApiStack);
  }

  return {};
}

export default HomePageEnhancer;
