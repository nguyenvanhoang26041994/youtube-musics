import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import withPlayerActions from '../../HOC/withPlayerActions';
import PlaylistCard from '../../components/PlaylistCard';
import SongCard from '../../containers/SongCard';
import Panel from './Panel';

import musicsFormater from '../../selectors/utils/musicsFormater';
import playlistsFormater from '../../selectors/utils/playlistsFormater';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }
  }
`;

const HomePage = ({ playerActions, playlists, hotSongs = [] }) => {
  return (
    <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex flex-col animated fadeIn">
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
              {...song}
            />
          </div>
        ))}
      </Panel>
    </HomePageWrapper>
  );
};

const HomePageEnhancer = compose(
  connect(state => ({
    playlists: playlistsFormater(state.playlistsReducer.playlists),
    hotSongs: musicsFormater(state.hotSongsReducer.musics),
  })),
  withPlayerActions,
  // withInjectSaga({ key: 'homePage', saga }),
  // withInjectReducer({ key: 'homePage', reducer }),
)(HomePage);

export default HomePageEnhancer;
