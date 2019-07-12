import './ListMusic.scss';
import cn from 'classnames';

import { Icon, Divider } from '../../../components/core';
import Item from './Item';

const ListMusic = ({ playingMusic, playingList, changeMusic, className }) => {
  return (
    <ul className={cn('ui-list-music', className)}>
      {playingList.musics.map(music => (
        <li key={music.id} className="mb-1">
          <Item
            changeMusic={changeMusic}
            music={music}
            isActive={playingMusic.id === music.id}
            isPlaying={playingMusic.id === music.id && playingMusic.isPlaying}
          />
          <Divider />
        </li>
      ))}
    </ul>
  );
}

export default ListMusic;
