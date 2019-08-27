import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import withPlayerActions from '../../HOC/withPlayerActions';
import withLayout from '../../HOC/withLayout';
import usePlayer from '../../hooks/usePlayer';
import PlaylistCard from '../../containers/PlaylistCard';
import SongCard from '../../containers/SongCard.mobile';
import SingerCard from '../../components/SingerCard';
import TopSongs from '../../components/TopSongs';
import SongSmallCard from '../../components/SongSmallCard';
import SongCardSkeleton from '../../components/SongCard/Skeleton';
import PlaylistCardSkeleton from '../../components/PlaylistCard/Skeleton';
import SingerCardSkeleton from '../../components/SingerCard/Skeleton';
import { Icon, Divider, Carousel, Panel } from '../../components/core';
import Topic from '../../components/Topic';
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
      transition: background-color 0.1s;
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
      background-color: ${tailwindColors['indigo-100']}
    }
    35% {
      background-color: ${tailwindColors['indigo-200']}
    }
    50% {
      background-color: ${tailwindColors['indigo-300']}
    }
    75% {
      background-color: ${tailwindColors['indigo-200']}
    }
    100% {
      background-color: ${tailwindColors['indigo-100']}
    }
  }
`;

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, loaders }) => {
  const { playMusic } = usePlayer();

  return (
    <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col animated fadeIn">
      <div className="h-96 w-full flex bg-gray-200">
        <Carousel className="w-full">

        </Carousel>
      </div>
      <Divider className="my-10" />
      <div className="flex w-full flex-col">
        <div className="w-full flex">
          <div className="w-8/12 flex flex-col">
            <Panel className="w-full" title="Những bài hát hay" icon="music-note">
              {!loaders.isTrendingSongsFetching && fp.compose(fp.take(12), fp.reverse)(trendingSongs).map(song => (
                <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 p-1/2" key={song.id}>
                  <SongSmallCard
                    className="w-full"
                    onClick={() => playMusic(song)}
                    {...song}
                  />
                </div>
              ))}
            </Panel>
          </div>
          <div className="w-4/12 flex flex-col ml-1">
            <Panel className="w-full" title="Chủ Đề" icon="music-note">
              <div className="w-full flex flex-col mt-1/2">
                <Topic color="blue-500 mb-1">
                  <div className="text-white text-xl">Nhạc Cover</div>
                </Topic>
                <Topic color="teal-500 mb-1">
                  <div className="text-white text-xl">Nhạc EDM</div>
                </Topic>
                <Topic color="indigo-500 mb-1">
                  <div className="text-white text-xl">Nhạc Thất Tình</div>
                </Topic>
              </div>
            </Panel>
          </div>
        </div>
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
