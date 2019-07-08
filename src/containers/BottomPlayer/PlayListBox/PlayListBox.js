import './PlayListBox.scss';
import cn from 'classnames';
import fp from 'lodash/fp';
import ListMusic from '../../../components/ListMusic'
import withPlayingList from '../../../HOC/withPlayingList';
import withPlayingMusic from '../../../HOC/withPlayingMusic';

const PlayListBox = ({ playingList, className }) => {
  return (
    <section className={cn('ui-play-list-box flex h-full overflow-hidden', className)}>
      <div className="w-3/5 h-full">
        <ul>
          {playingList.musics.map(music => (
            <li key={ music.id}>
              <div className="flex items-center text-white h-12 bg-gray-500 border border-red-500">
                <span>
                  {music.name}({music.singer.name})
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/5 h-full"></div>
    </section>
  );
};

export default fp.compose(
  withPlayingList,
  withPlayingMusic
)(PlayListBox);
