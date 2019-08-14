import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Switch, Image } from '../../components/core';
import MusicItem from './MusicItem';

const PlaylistWrapper = styled.div`
`;

const Playlist = ({ className, playingList, playingMusic, playingMusicActions }) => {
  return (
    <PlaylistWrapper className={cn('ui-playlist flex flex-col', className)}>
      <div className="w-full p-3">
        <div className="ui-playlist__head w-full h-32 flex mb-10">
          <Image src={playingList.musics[0] && playingList.musics[0].img} className="h-32 w-32" />
          <div className="ml-5 flex flex-col justify-end">
            <h3 className="text-sm text-gray-500 uppercase">Playlist</h3>
            <h2 className="text-2xl text-white font-bold">{playingList.name}</h2>
            <h3 className="text-sm text-white flex items-center">
              <span>Created by <span className="cursor-pointer text-teal-400">{playingList.user.name}</span></span>
              <span>, {playingList.musics.length} songs</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="ui-playlist__musics flex-1 h-full">
        {/* <div className="flex items-center justify-end my-5">
          <Switch size="xs" color="teal-400" className="mr-3" />
        </div> */}
        <ul className="flex flex-col text-white h-full overflow-scroll scrollbar-hidden">
          {playingList.musics.map((music, idx) => (
            <li key={idx}>
              <MusicItem
                index={idx + 1}
                onClick={() => playingMusicActions.changeMusic(music)}
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
    user: {},
  },
  playingMusic: {},
  changeMusic: f => f,
};

export default Playlist;
