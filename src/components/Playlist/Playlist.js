import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Divider, Image, Button, Icon } from '../../components/core';
import MusicItem from './MusicItem';

const PlaylistWrapper = styled.div`
  &.ui-playlist {
    .ui-playlist__musics {
      li:nth-child(even) {
        .ui-playlist__music:not(.ui-music-item--active):not(:hover) {
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;

const Playlist = ({ className, musics, name, id, user, playingMusic, onPlayMusic, onPlayPlaylist, isPlaying }) => {
  const handlePlayPlaylist = () => onPlayPlaylist({
    id,
    name,
    musics,
    user,
  });

  return (
    <PlaylistWrapper className={cn('ui-playlist flex flex-col', className)}>
      <div className="w-full p-3">
        <div className="ui-playlist__head w-full h-32 flex">
          <Image src={musics[0] && musics[0].img} className="h-32 w-32" />
          <div className="ml-5 flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl text-white font-bold">{name}</h2>
              <h3 className="text-sm text-white flex items-center">
                <span>Created by <span className="cursor-pointer text-teal-400">{user.name}</span></span>
                <span>, {musics.length} songs</span>
              </h3>
            </div>
            <h3 className="text-sm text-gray-500 uppercase flex">
              {!isPlaying && (
                <Button size="sm" color="teal-400" className="mr-2 text-white rounded-full" onClick={handlePlayPlaylist}>
                  PLAY PLAYLIST
                  <Icon name="play" size="xs" className="ml-3" />
                </Button>
              )}
              <Button size="sm" color="teal-400" className="mr-2 text-white rounded-full">
                <Icon name="ellipsis-h" />
              </Button>
            </h3>
          </div>
        </div>
      </div>
      <div className="ui-playlist__musics flex-1 h-full">
        <ul className="flex flex-col text-white h-full overflow-scroll scrollbar-hidden">
          {musics.map((music, idx) => (
            <li key={idx}>
              <MusicItem
                className="ui-playlist__music"
                index={idx + 1}
                onClick={() => onPlayMusic(music)}
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
  isPlaying: PropTypes.bool,
  className: PropTypes.string,
  musics: PropTypes.array,
  name: PropTypes.string,
  user: PropTypes.object,
  playingMusic: PropTypes.object,
  onPlayMusic: PropTypes.func,
  onPlayPlaylist: PropTypes.func,
};
Playlist.defaultProps = {
  musics: [],
  user: {},
  playingMusic: {},
  onPlayMusic: f => f,
  onPlayPlaylist: f => f,
};

export default Playlist;
