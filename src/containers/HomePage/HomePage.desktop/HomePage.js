import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import * as actionCreators from '../actions';

import withPlayerActions from '../../../HOC/withPlayerActions';
import withLayout from '../../../HOC/withLayout';
import usePlayer from '../../../hooks/usePlayer';
import PlaylistCard from '../../../containers/PlaylistCard';
import SongCard from '../../../containers/SongCard';
import SingerCard from '../../../components/SingerCard';
import TopSongs from '../../../components/TopSongs';
import { Icon, Divider, Carousel, Panel } from '../../../components/core';
import Topics from './Topics';
import musicsFormater from '../../../selectors/utils/musicsFormater';
import playlistsFormater from '../../../selectors/utils/playlistsFormater';
import tailwindColors from '../../../utils/tailwindColors';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }

    .--song-image-h32 {
      .ui-song-card__img {
        height: 8rem;
      }
    }

    .--playlist-img-h48 {
      height: 12rem;
    }
  }
`;

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, loaders, topics, topicMusics, getTopicMusics }) => {
  const { playMusic } = usePlayer();

  return (
    <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col animated fadeIn">
      <div className="h-96 w-full flex bg-gray-200">
        <Carousel className="w-full">

        </Carousel>
      </div>
      <Divider className="my-10" />
      <div className="flex w-full flex-col">
        <Topics
          topicMusics={topicMusics}
          getTopicMusics={getTopicMusics}
          topics={topics}
        />
        <Divider className="mb-5 mt-2" />
        <div className="w-full flex">
          <div className="w-8/12 flex flex-col">
            <Panel className="w-full" title="Hôm Nay Nghe Gì" icon="music-note">
              {!loaders.isTrendingSongsFetching && fp.take(8, trendingSongs).map(song => (
                <div className="w-1/3 xl:w-1/4 lg:w-1/4 md:w-1/4 p-1/2" key={song.id}>
                  <SongCard
                    className="w-full --song-image-h32"
                    {...song}
                  />
                </div>
              ))}
            </Panel>
            <Divider className="mb-5 mt-2" />
            <Panel className="w-full" title="Playlist tuyển chọn" icon="heart">
              {!loaders.isTrendingPlaylistsFetching && fp.take(4, trendingPlaylists).map(playlist => (
                <div className="w-1/3 xl:w-1/4 lg:w-1/4 md:w-1/4 p-1/2" key={playlist.id}>
                  <PlaylistCard
                    className="w-full --playlist-img-h48"
                    {...playlist}
                  />
                </div>
              ))}
            </Panel>
            <Divider className="mb-5 mt-2" />
            <Panel className="w-full" title="Ca sĩ đang hot" icon="music-note">
              {!loaders.isTrendingSingersFetching && fp.take(4, trendingSingers).map(singer => (
                <div className="w-1/3 xl:w-1/4 lg:w-1/4 md:w-1/4 p-1/2" key={singer.id}>
                  <SingerCard
                    className="w-full"
                    {...singer}
                  />
                </div>
              ))}
            </Panel>
          </div>
          <div className="w-4/12 flex flex-col ml-1">
            <TopSongs className="w-full" />
          </div>
        </div>
      </div>
    </HomePageWrapper>
  );
};

const mapStateToProps = state => ({
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

const mapDispatchToProps = dispatch => ({
  getTopicMusics: id => dispatch(actionCreators.getTopicMusics(id)),
});

const HomePageEnhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withPlayerActions,
  withLayout,
)(HomePage);

HomePageEnhancer.getInitialProps = async ({ query, reduxStore: store, isServer }) => {
  const callApiStack = [
    store.dispatch(actionCreators.getTrendingPlaylists()),
    store.dispatch(actionCreators.getTrendingSongs()),
    store.dispatch(actionCreators.getTrendingSingers()),
  ];

  await store.dispatch(actionCreators.getTopics());

  let callTopicMusicsApi = Promise.resolve({});
  const topics = store.getState().homePageReducer.topics;

  if (topics && topics[0]) {
    callTopicMusicsApi = store.dispatch(actionCreators.getTopicMusics(topics[0].id));
  }

  // in client-side await will be stop render
  if (isServer) {
    await Promise.all([
      ...callApiStack,
      callTopicMusicsApi,
    ]);
  }

  return {};
}

export default HomePageEnhancer;
