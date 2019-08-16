import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fp from 'lodash/fp';

import withPlayerActions from '../../HOC/withPlayerActions';
import PlaylistCard from '../../components/PlaylistCard';
import SongCard from '../../containers/SongCard';
import SingerCard from '../../components/SingerCard';
import Panel from './Panel';

import musicsFormater from '../../selectors/utils/musicsFormater';
import playlistsFormater from '../../selectors/utils/playlistsFormater';

import profiles from '../../../server/data/profiles';

const trendingSingers = profiles;

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
      <Panel className="mb-10" title="HOT & NEW SONGS">
        {fp.take(10, hotSongs).map(song => (
          <div className="w-1/5 p-1" key={song.id}>
            <SongCard
              className="w-full"
              {...song}
            />
          </div>
        ))}
      </Panel>
      <Panel className="mb-10" title="COOL PLAYLIST">
        {fp.take(5, playlists).map(playlist => (
          <div className="w-1/5 p-1" key={playlist.id}>
            <PlaylistCard
              className="w-full"
              onClickPlayPlaylist={() => playerActions.playPlaylist(playlist)}
              {...playlist}
            />
          </div>
        ))}
      </Panel>
      <Panel className="mb-10" title="TRENDING SINGER">
        {fp.take(5, trendingSingers).map(singer => (
          <div className="w-1/5 p-1" key={singer.id}>
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
    playlists: playlistsFormater(state.playlistsReducer.playlists),
    hotSongs: musicsFormater(state.hotSongsReducer.musics),
  })),
  withPlayerActions,
)(HomePage);

export default HomePageEnhancer;
