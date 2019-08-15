import React from 'react';
import { compose } from 'redux';
import styled from 'styled-components';

import withInjectReducer from '../../HOC/withInjectReducer';
import withInjectSaga from '../../HOC/withInjectSaga';
import withPlayerActions from '../../HOC/withPlayerActions';
import reducer from './reducer';
import saga from './saga';
import RankingBoard from '../RankingBoard';
import PlaylistCard from '../../components/PlaylistCard';
import { musicsAsObject } from '../../data/musics';
import { playlistsAsObject } from '../../data/playlists';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }
  }
`;

const HomePage = ({ playerActions }) => (
  <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col">
    <div className="mb-2 w-full flex flex-col">
      <h2 className="text-teal-500 font-bold text-lg mb-2 px-2">HOT PLAYLISTS</h2>
      <div className="flex w-full">
        <did className="w-1/4 p-2">
          <PlaylistCard
            className="w-full"
            onClickPlayPlaylist={() => playerActions.playPlaylist(playlistsAsObject['playlist-001'])}
            {...playlistsAsObject['playlist-001']}
          />
        </did>
        <did className="w-1/4 p-2">
          <PlaylistCard
            className="w-full"
            onClickPlayPlaylist={() => playerActions.playPlaylist(playlistsAsObject['playlist-002'])}
            {...playlistsAsObject['playlist-002']}
          />
        </did>
        <did className="w-1/4 p-2">
          <PlaylistCard
            className="w-full"
            onClickPlayPlaylist={() => playerActions.playPlaylist(playlistsAsObject['playlist-003'])}
            {...playlistsAsObject['playlist-003']}
          />
        </did>
        <did className="w-1/4 p-2">
          <PlaylistCard
            className="w-full"
            onClickPlayPlaylist={() => playerActions.playPlaylist(playlistsAsObject['playlist-001'])}
            {...playlistsAsObject['playlist-001']}
          />
        </did>
      </div>
    </div>

    {/* <div className="mb-2 w-full flex flex-col">
      <h2 className="text-teal-500 font-bold text-lg mb-2 px-2">HOT SONGS</h2>
      <div className="flex w-full">
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" {...playlistsAsObject['playlist-001']} /></did>
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" {...playlistsAsObject['playlist-002']} /></did>
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" {...playlistsAsObject['playlist-003']} /></did>
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" {...playlistsAsObject['playlist-001']} /></did>
      </div>
    </div> */}
  </HomePageWrapper>
);

export default compose(
  withPlayerActions,
  withInjectSaga({ key: 'homePage', saga }),
  withInjectReducer({ key: 'homePage', reducer }),
)(HomePage);
