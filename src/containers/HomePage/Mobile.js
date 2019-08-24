import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';
import cn from 'classnames';

import { Icon, Image } from '../../components/core';
import SongCard from '../../containers/SongCard.mobile';
import withPlayerActions from '../../HOC/withPlayerActions';
import Navbar from '../../layouts.mobile/Navbar';
import GlobalMusicPlayer from '../GlobalMusicPlayer.mobile';

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

const LayoutWrapper = styled.div``;

const MenuWithIcon = ({ name, text, active, onClick, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-center items-center font-bold transition-fast',
        {
          'text-indigo-700': active,
          'text-gray-700': !active,
        },
        className
      )}
      onClick={onClick}
    >
      <Icon name={name} size="xl" />
      <span className="text-xs">
        {text}
      </span>
    </div>
  );
};

const LayoutWithCustomNavbar = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <LayoutWrapper className="font-common overflow-hidden min-h-screen bg-gray-200 scrollbar-hidden">
      <GlobalMusicPlayer className="z-20" />
      <Navbar className="fixed top-0 w-full z-50">
        <div className="flex items-center bg-white text-gray-900 w-full h-12">
          <MenuWithIcon
            name="home"
            text="Trang chủ"
            className="w-1/5"
            active={activeTab === 'Home'}
            onClick={() => setActiveTab('Home')}
          />
          <MenuWithIcon
            name="video"
            text="Video"
            className="w-1/5"
            active={activeTab === 'Video'}
          />
          <MenuWithIcon
            name="heart"
            text="BXH"
            className="w-1/5"
            active={activeTab === 'BXH'}
          />
          <MenuWithIcon
            name="heart"
            text="Chủ đề"
            className="w-1/5"
            active={activeTab === 'Topic'}
          />
          <MenuWithIcon
            name="bell" 
            text="Thông báo"
            className="w-1/5"
            active={activeTab === 'Notification'}
          />
        </div>
      </Navbar>
      <main className="flex flex-col flex-1">
        {children}
      </main>
    </LayoutWrapper>
  );
};

const Panel = ({ className, icon, text, children }) => {
  return (
    <div className={cn('bg-white', className)}>
      <div className="text-xs px-1 h-8 flex items-center text-indigo-500">
        <Icon name={icon} />
        <span className="ml-2">{text}</span>
      </div>
      <div className="flex flex-wrap p-1/2">
        {children}
      </div>
    </div>
  );
};

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, playerActions, loaders }) => {
  return (
    <LayoutWithCustomNavbar>
      <div className="h-24" />
      <HomePageWrapper id="home-page" className="home-page home-page-mobile">
        <Panel
          className="mb-1"
          text="Nghe Gì Hôm Nay"
          icon="music-note"
        >
          {!loaders.isTrendingSongsFetching && fp.take(6, trendingSongs).map(song => (
            <div className="w-1/3 p-1/2" key={song.id}>
              <SongCard
                className="w-full"
                {...song}
              />
            </div>
          ))}
        </Panel>
      </HomePageWrapper>
      <div className="h-10" />
    </LayoutWithCustomNavbar>
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
