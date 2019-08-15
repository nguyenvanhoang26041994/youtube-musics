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
import SongCard from '../../components/SongCard';
import Panel from './Panel';
import { musicsAsObject } from '../../data/musics';
import { playlistsAsObject } from '../../data/playlists';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }
  }
`;

const playlists = [
  playlistsAsObject['playlist-001'],
  playlistsAsObject['playlist-002'],
  playlistsAsObject['playlist-003'],
  playlistsAsObject['playlist-004'],
  playlistsAsObject['playlist-005'],
];

const hotSongs = [
  musicsAsObject['iQp1_GfDhwQ'],
  musicsAsObject['87gWaABqGYs'],
  musicsAsObject['j4zP5saRZqg'],
  musicsAsObject['fB8TyLTD7EE'],
  musicsAsObject['kXYiU_JCYtU'],
  musicsAsObject['SvRFNNbxuAk'],
  musicsAsObject['Tv6WImqSuxA'],
  musicsAsObject['iKzRIweSBLA'],
  musicsAsObject['S2oxFIsENgM'],
  musicsAsObject['yaJx0Gj_LCY'],
];

const HomePage = ({ playerActions }) => (
  <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col">
    <Panel className="mb-10" title="HOT PLAYLIST">
      {playlists.map(playlist => (
        <div className="w-1/4 p-2" key={playlist.id}>
          <PlaylistCard
            className="w-full"
            onClickPlayPlaylist={() => playerActions.playPlaylist(playlist)}
            {...playlist}
          />
        </div>
      ))}
    </Panel>
    <Panel className="mb-10" title="HOT SONGS">
      {hotSongs.map(song => (
        <div className="w-1/4 p-2" key={song.id}>
          <SongCard
            className="w-full"
            onClick={() => playerActions.playMusic(song)}
            {...song}
          />
        </div>
      ))}
    </Panel>
  </HomePageWrapper>
);

export default compose(
  withPlayerActions,
  withInjectSaga({ key: 'homePage', saga }),
  withInjectReducer({ key: 'homePage', reducer }),
)(HomePage);
