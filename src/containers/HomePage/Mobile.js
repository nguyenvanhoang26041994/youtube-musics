import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';
import cn from 'classnames';

import { Button, Icon, Image } from '../../components/core';
import MusicCard from '../../containers/MusicCard';
import PlaylistCard from '../../containers/PlaylistCard';
import SingerCard from '../../components/SingerCard';
import withPlayerActions from '../../HOC/withPlayerActions';
import withMobileLayout from '../../HOC/withMobileLayout';
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
    <LayoutWrapper className="font-common overflow-hidden min-h-screen bg-gray-200">
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
            // onClick={() => setActiveTab('Video')}
          />
          <MenuWithIcon
            name="heart"
            text="BXH"
            className="w-1/5"
            active={activeTab === 'BXH'}
            // onClick={() => setActiveTab('BXH')}
          />
          <MenuWithIcon
            name="heart"
            text="Chủ đề"
            className="w-1/5"
            active={activeTab === 'Topic'}
            // onClick={() => setActiveTab('Topic')}
          />
          <MenuWithIcon
            name="bell" 
            text="Thông báo"
            className="w-1/5"
            active={activeTab === 'Notification'}
            // onClick={() => setActiveTab('Notification')}
          />
        </div>
      </Navbar>
      <main className="flex flex-col flex-1">
        {children}
      </main>
    </LayoutWrapper>
  );
};

const PanelWrapper = styled.section``;

const Song = ({ img, name, singersName, onClick }) => {
  return (
    <div className="ui-song flex flex-col" onClick={onClick}>
      <Image src={img} className="w-full h-24" />
      <div className="w-full h-12 flex flex-col justify-center">
        <div className="text-xs text-indigo-500">{name}</div>
        <div className="text-2xs text-gray-700">{singersName}</div>
      </div>
    </div>
  );
}

const HomePage = ({ trendingPlaylists, trendingSongs, trendingSingers, playerActions, loaders }) => {
  return (
    <LayoutWithCustomNavbar>
      <HomePageWrapper id="home-page" className="home-page home-page-mobile">
        <div className="h-24" />
        <div className="bg-white">
          <div className="text-xs px-1 h-8 flex items-center text-indigo-500">
            <Icon name="music-note" />
            <span className="ml-2">Nghe Gì Hôm Nay</span>
          </div>
          <div className="flex flex-wrap p-1/2">
            <div className="w-1/3 p-1/2">
              <Song
                {...trendingSongs[0]}
                onClick={() => playerActions.playMusic(trendingSongs[0])}
              />
            </div>

            <div className="w-1/3 p-1/2">
              <Song
                {...trendingSongs[7]}
                onClick={() => playerActions.playMusic(trendingSongs[7])}
              />
            </div>

            <div className="w-1/3 p-1/2">
              <Song
                {...trendingSongs[5]}
                onClick={() => playerActions.playMusic(trendingSongs[5])}
              />
            </div>

            <div className="w-1/3 p-1/2">
              <Song
                {...trendingSongs[1]}
                onClick={() => playerActions.playMusic(trendingSongs[1])}
              />
            </div>

            <div className="w-1/3 p-1/2">
              <Song
                {...trendingSongs[9]}
                onClick={() => playerActions.playMusic(trendingSongs[9])}
              />
            </div>
            <div className="w-1/3 p-1/2">
              <Song
                {...trendingSongs[16]}
                onClick={() => playerActions.playMusic(trendingSongs[16])}
              />
            </div>
          </div>
        </div>
      </HomePageWrapper>
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
