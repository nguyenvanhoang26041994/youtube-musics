import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import withPlayerActions from '../../HOC/withPlayerActions';
import withLayout from '../../HOC/withLayout';
import PlaylistCard from '../../containers/PlaylistCard';
import SongCard from '../../containers/SongCard.mobile';
import SingerCard from '../../components/SingerCard';
import TopSongs from '../../components/TopSongs';
import SongCardSkeleton from '../../components/SongCard/Skeleton';
import PlaylistCardSkeleton from '../../components/PlaylistCard/Skeleton';
import SingerCardSkeleton from '../../components/SingerCard/Skeleton';
import { Icon, Divider } from '../../components/core';
import Panel from './Panel';

import musicsFormater from '../../selectors/utils/musicsFormater';
import playlistsFormater from '../../selectors/utils/playlistsFormater';
import * as actionCreators from './actions';
import tailwindColors from '../../utils/tailwindColors';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }

    .--animation-loading {
      animation-name: identifier;
      animation-duration: 1s;
      animation-iteration-count: infinite;
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

  @keyframes identifier {
    0% {
      background-color: ${tailwindColors['gray-100']}
    }
    35% {
      background-color: ${tailwindColors['gray-200']}
    }
    50% {
      background-color: ${tailwindColors['gray-300']}
    }
    75% {
      background-color: ${tailwindColors['gray-200']}
    }
    100% {
      background-color: ${tailwindColors['gray-100']}
    }
  }
`;

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, loaders }) => {
  return (
    <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col animated fadeIn">
      <div className="flex w-full">
        <div className="w-8/12 flex flex-col">
          <Panel className="mb-3 w-full" title="Hôm Nay Nghe Gì" icon="music-note">
            {!loaders.isTrendingSongsFetching && fp.take(12, trendingSongs).map(song => (
              <div className="w-1/3 xl:w-1/4 lg:w-1/4 md:w-1/4 p-1/2" key={song.id}>
                <SongCard
                  className="w-full --song-image-h32"
                  {...song}
                />
              </div>
            ))}
            {/* {loaders.isTrendingSongsFetching && fp.times(String, 10).map(idx => (
              <div className="w-1/3 xl:w-1/5 lg:w-1/5 md:w-1/5 p-1/2" key={idx}>
                <SongCardSkeleton className="w-full" />
              </div>
            ))} */}
          </Panel>
          <Divider />
          <Panel className="mb-3 w-full" title="Playlist tuyển chọn" icon="heart">
            {!loaders.isTrendingPlaylistsFetching && fp.take(4, trendingPlaylists).map(playlist => (
              <div className="w-1/3 xl:w-1/4 lg:w-1/4 md:w-1/4 p-1/2" key={playlist.id}>
                <PlaylistCard
                  className="w-full --playlist-img-h48"
                  {...playlist}
                />
              </div>
            ))}
            {/* {loaders.isTrendingPlaylistsFetching && fp.times(String, 5).map(idx => (
              <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={idx}>
                <PlaylistCardSkeleton className="w-full" />
              </div>
            ))} */}
          </Panel>
          <Divider />
          <Panel className="mb-3 w-full" title="Ca sĩ đang hot" icon="music-note">
            {!loaders.isTrendingSingersFetching && fp.take(4, trendingSingers).map(singer => (
              <div className="w-1/3 xl:w-1/4 lg:w-1/4 md:w-1/4 p-1/2" key={singer.id}>
                <SingerCard
                  className="w-full"
                  {...singer}
                />
              </div>
            ))}
            {/* {loaders.isTrendingSingersFetching && fp.times(String, 5).map(idx => (
              <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 p-1" key={idx}>
                <SingerCardSkeleton className="w-full" />
              </div>
            ))} */}
          </Panel>
        </div>
        <div className="w-4/12 flex flex-col ml-2 rounded">
          <h2 className="flex items-center text-indigo-500 font-bold text-lg mb-2">
            <Icon name="analytics" className="m-1" />Bảng Xếp Hạng
          </h2>
          <div className="flex-1">
            <TopSongs />
          </div>
        </div>
      </div>
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
  withLayout,
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
