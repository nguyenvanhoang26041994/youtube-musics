import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Divider } from '../../components/core';
import MusicItem from './MusicItem';

const PlaylistWrapper = styled.div`
  & .ui-playlist__musics {
  }
`;

const Playlist = ({ className, playingList, playingMusic, changeMusic }) => {
  return (
    <PlaylistWrapper className={cn('ui-playlist flex flex-col', className)}>
      <div className="w-full p-3">
        <div className="ui-playlist__head w-full h-32 flex mb-10">
          <img src={playingList.musics[0] && playingList.musics[0].img} className="h-32 w-32" />
          <div className="ml-5 flex flex-col justify-end">
            <h3 className="text-sm text-gray-500 uppercase">Playlist</h3>
            <h2 className="text-2xl text-white font-bold">{playingList.name}</h2>
          </div>
        </div>
      </div>
      <div className="ui-playlist__musics flex-1">
        <ul className="flex flex-col text-white">
          {playingList.musics.map((music, idx) => (
            <li key={idx}>
              <MusicItem
                index={idx + 1}
                onClick={() => changeMusic(music)}
                isActive={playingMusic.id === music.id}
                isPlaying={playingMusic.id === music.id && playingMusic.isPlaying}
                {...music}
              />
            </li>
          ))}
        </ul>
      </div>
    </PlaylistWrapper>
  );
}

Playlist.displayName = 'Playlist';
Playlist.propTypes = {
  className: PropTypes.string,
  playingList: PropTypes.object,
  playingMusic: PropTypes.object,
  changeMusic: PropTypes.func,
};
Playlist.defaultProps = {
  playingList: {
    musics: [],
  },
  playingMusic: {},
  changeMusic: f => f,
};

export default Playlist;
