import './ListMusic.scss';
import cn from 'classnames';
import MusicItem from './MusicItem';
import { Divider } from '../core';
import withPlayingMusic from '../../HOC/withPlayingMusic';

const ListMusic = ({ musics, className, playingMusicActions, playingMusic }) => {
  return (
    <ul className={cn('ui-list-music flex flex-row flex-wrap', className)}>
      {musics.map((music, idx) => (
        <li key={idx} className="mt-1 w-full">
          <MusicItem
            {...music}
            isPlaying={playingMusic.isPlaying}
            isActive={music.id === playingMusic.id}
            onClick={() => playingMusicActions.changeMusic(music)}
          />
        </li>
      ))}
    </ul>
  );
};

export default withPlayingMusic(ListMusic);
