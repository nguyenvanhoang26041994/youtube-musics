import './MusicDetailPage.scss';
import cn from 'classnames';
import fp from 'lodash/fp';
import { Icon } from '../../components/core';
import ListMusic from '../../components/ListMusic';
import withPlayingMusic from '../../HOC/withPlayingMusic';
import withPlayingList from '../../HOC/withPlayingList';

const MusicDetailPage = ({ playingMusic, playingList, playingMusicActions }) => {
  return (
    <div id="music-detail-page" className="music-detail-page flex-1">
      <div className="w-full h-full">
        <div className="h-32 z-10 sticky" style={{ top: '4rem' }}>
          <div className="bg-primary w-full h-full absolute" />
          <div className="container w-full h-full mx-auto">
            <div className="flex items-center h-full px-3 animated slideInDown faster">
              {/* <Icon iName="headphones-alt" className="text-5xl text-white" /> */}
              <div className="flex flex-col justify-center ml-6">
                <span className="text-lg text-teal-500 hover:underline cursor-pointer">Nhạc Việt Nam nhẹ nhàng</span>
                <span className="flex item-center text-xs text-white cursor-pointer">
                  <span>Nguyễn Văn Hoàng</span>
                  <span className="flex items-center ml-4">
                    {/* <Icon iName="heart" className="animated infinite fast heartBeat text-xs text-white" /> */}
                    <span className="ml-1">1.123.123</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <ListMusic
            musics={playingList.musics}
            className="animated slideInUp faster"
            onPlay={playingMusicActions.changeMusic}
            playingMusic={playingMusic}
          />
        </div>
      </div>
    </div>
  );
};

export default fp.compose(
  withPlayingMusic,
  withPlayingList,
)(MusicDetailPage);
