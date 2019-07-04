import cn from 'classnames';
import MusicCard from '../../components/MusicCard';
import withPlayingMusic from '../../HOC/withPlayingMusic'

const TrendingMusics = ({ musics, playingMusic, playingMusicActions, className }) => {
  return (
    <ul className={cn('ui-trending-musics flex', className)}>
      {musics.map((music, idx) => (
        <li key={idx} className="m-4">
          <MusicCard {...music} isPlaying={music.id === playingMusic.id && playingMusic.isPlaying} onPlay={playingMusicActions.changeMusic} />
        </li>
      ))}
    </ul>
  );
};

export default withPlayingMusic(TrendingMusics);