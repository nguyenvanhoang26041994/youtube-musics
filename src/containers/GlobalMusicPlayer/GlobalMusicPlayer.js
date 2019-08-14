import './GlobalMusicPlayer.scss';
import cn from 'classnames';
import fp from 'lodash/fp';
import { Icon, Slider, BlurBackground, Image } from '../../components/core';
import Playlist from '../../components/Playlist';
import { mode } from '../../constants/playing-music';
import withPlayingList from '../../HOC/withPlayingList';
import withPlayingMusic from '../../HOC/withPlayingMusic';
import { calcTime } from '../../utils/time';

const Audio = ({ className, src, musicRef, ...otherProps }) => (
  <audio className={cn('hidden', className)} ref={musicRef} {...otherProps}>
    <source src={src} />
  </audio>
);

class GlobalMusicPlayer extends React.Component {
  state = {
    musicTime: 0,
    currentMusicTime: 0,
    musicVolume: 0,
    isShowBiggerPlayer: true,
    isMusicReady: false,
    isShowStickyPlaylist: false,
  };

  musicRef = React.createRef(null);

  componentDidMount() {
    this.setStateWhenAudioLoaded();
  }

  componentDidUpdate(prevProps) {
    if (this.props.playingMusic.id && this.props.playingMusic.id !== prevProps.playingMusic.id && this.musicRef && this.musicRef.current) {
      this.musicRef.current.load && this.musicRef.current.load();
      this.musicRef.current.play && this.musicRef.current.play();
    }
  }

  setStateWhenAudioLoaded = () => {
    if (this.musicRef && this.musicRef.current) {
      this.setState({
        musicTime: this.musicRef.current.duration,
        musicVolume: this.musicRef.current.volume,
        currentMusicTime: this.musicRef.current.currentTime,
      }, () => this.props.playingMusicActions.changeIsPlaying(!this.musicRef.current.paused));
    }
  };

  onLoadedData = this.setStateWhenAudioLoaded;

  playMusic = () => this.musicRef && this.musicRef.current && this.musicRef.current.play && this.musicRef.current.play();
  pauseMusic = () => this.musicRef && this.musicRef.current && this.musicRef.current.pause && this.musicRef.current.pause();

  changeVolume = volume => {
    if (this.musicRef && this.musicRef.current) {
      this.musicRef.current.volume = volume;
      return this.musicRef.current.volume;
    }
  };

  changeCurrentTime = time => {
    if (this.musicRef && this.musicRef.current) {
      this.musicRef.current.currentTime = time;
      return this.musicRef.current.currentTime;
    }
  };

  handleChangeMusicVolume = (e, { value }) => this.setState({ musicVolume: value });
  handleChangeCurrentMusicTime = (e, { value }) => this.changeCurrentTime(value * this.state.musicTime);
  handleHiddenBiggerPlayer = () => this.setState({ isShowBiggerPlayer : false });
  handleShowBiggerPlayer = () => this.setState({ isShowBiggerPlayer : true });
  handleHideStickyPlaylist = () => this.setState({ isShowStickyPlaylist : false });
  handleShowStickyPlaylist = () => this.setState({ isShowStickyPlaylist : true });

  onTimeUpdate = e => this.setState({ currentMusicTime: e.target.currentTime });
  onVolumeChange = e => this.setState({ volume: e.target.volume });
  onEnded = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlay = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPause = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onWaiting = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlaying = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);

  render() {
    const { className, playingMusic, playingMusicActions, playingList } = this.props;
    const { currentMusicTime, musicTime, isMusicReady, isShowBiggerPlayer, isShowStickyPlaylist } = this.state;

    return (
      <div id="global-music-player" className={cn('ui-global-music-player fixed bottom-0 left-0 w-full', className)}>
        <Audio
          src={playingMusic.src}
          musicRef={this.musicRef}
          loop={playingMusic.mode === mode.LOOP}
          onTimeUpdate={this.onTimeUpdate}
          onLoadedData={this.onLoadedData}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onWaiting={this.onWaiting}
          onPlaying={this.onPlaying}
          onVolumeChange={this.onVolumeChange}
        />
        <div className="global-music-player__biger-player relative w-full z-10 overflow-hidden transition-fast" style={{ height: isShowBiggerPlayer ? 'calc(100vh - 8rem)' : 0 }}>
          <div className="global-music-player__biger-player-container container flex mx-auto h-full relative">
            <Icon
              name="ellipsis-h"
              color="teal-600"
              className="absolute top-0 left-haft z-20 animated fast hidden global-music-player__biger-player__scroll"
              onClick={this.handleHiddenBiggerPlayer}
            />
            <BlurBackground />
            <Playlist
              className="w-full h-full"
              playingList={playingList}
              playingMusic={playingMusic}
              changeMusic={this.props.playingMusicActions.changeMusic}
            />
          </div>
        </div>
        <div className="w-full relative">
          {/* <BlurBackground /> */}
          <div className="container relative flex items-center h-16 mx-auto z-10 px-1">
            {!isShowBiggerPlayer && (
              <Icon
                name="ellipsis-h"
                color="teal-600"
                className="absolute top-0 left-haft z-20 animated fadeIn slow"
                style={{ transform: 'translate(0, 0)'}}
                onClick={this.handleShowBiggerPlayer}
              />
            )}
            <div className="flex mr-2 items-center mr-5">
              <Image className="h-10 w-10 mr-2 cursor-pointer rounded-sm" src={playingMusic.img} />
              <div className="flex flex-col">
                <div className="text-sm text-white cursor-pointer w-48 overflow-hidden truncate">{playingMusic.name}</div>
                <div className="text-xs text-gray-500 cursor-pointer w-48 overflow-hidden truncate">{playingMusic.singersName}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="step-backward" size="xs" color="white" className="mr-4" />
              <div className="flex items-center justify-center rounded-full bg-white h-8 w-8">
                {playingMusic.isPlaying
                  ? <Icon name="pause" size="xs" color="teal-500" onClick={this.pauseMusic} />
                  : <Icon name="play" size="xs" color="teal-500" onClick={this.playMusic} />
                }
              </div>
              <Icon name="step-forward" size="xs" color="white" className="ml-4" />
            </div>
            <div className="flex-1 ml-4 relative">
              <Slider
                className="w-full"
                percent={currentMusicTime/musicTime}
                onChange={this.handleChangeCurrentMusicTime}
              />
              <div className="text-2xs absolute right-0 bottom-full flex font-mono">
                <div className="text-teal-300">{calcTime(currentMusicTime)}</div>
                <span className="text-white">/</span>
                <div className="text-white">{calcTime(musicTime)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default fp.compose(
  withPlayingList,
  withPlayingMusic
)(GlobalMusicPlayer);
