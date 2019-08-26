import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { playlistsAsObject } from '../../../server/data/playlists';
import musicsFormater from '../../selectors/utils/musicsFormater';
import SongItem from './SongItem';
import { Divider } from '../../components/core';

const TopSongsWrapper = styled.div``;

const musics = musicsFormater(playlistsAsObject['playlist-001'].musics);

const TopSongs = ({ className }) => {
  return (
    <TopSongsWrapper className={cn('ui-top-songs', className)}>
      {fp.take(20, musics).map(music => (
        <div key={music.id} className="p-1">
          <SongItem {...music} />
          <Divider />
        </div>
      ))}
    </TopSongsWrapper>
  );
};

export default TopSongs;
