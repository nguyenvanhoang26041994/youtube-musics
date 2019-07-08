import './BottomPlayer.scss';
import cn from 'classnames';
import React from 'react';
import Link from 'next/link';
import { Icon, Slider, BlurBackground } from '../../components/core';
import PlayListBox from './PlayListBox';
import withPlayingMusic from '../../HOC/withPlayingMusic';
import { mode } from '../../constants/playing-music';
import { calcTime } from '../../utils/time';

class BottomPlayer extends React.Component {
  state = {
    musicTime: 0,
    currentMusicTime: 0,
    musicVolume: 0,
    isFlipInX: true,
  };

  componentDidMount() {
    this.audioRef.current.play();
    this.setStateWhenAudioLoaded();
  }

  componentDidUpdate(prevProps) {
    if (this.props.playingMusic.id !== prevProps.playingMusic.id && this.audioRef && this.audioRef.current) {
      this.audioRef.current.load();
      this.audioRef.current.play();
    }
  }

  setMusicTime = musicTime => this.setState({ musicTime });
  setCurrentTime = currentMusicTime => this.setState({ currentMusicTime });
  setMusicVolume = musicVolume => this.setState({ musicVolume });

  audioRef = React.createRef(null);

  playMusic = () => {
    if (this.audioRef && this.audioRef.current) {
      return this.audioRef.current.play();
    }
  };

  pauseMusic = () => {
    if (this.audioRef && this.audioRef.current) {
      return this.audioRef.current.pause();
    }
  }

  changeVolume = volume => {
    if (this.audioRef && this.audioRef.current) {
      this.audioRef.current.volume = volume;
      return this.audioRef.current.volume;
    }
  };

  changeCurrentTime = time => {
    if (this.audioRef && this.audioRef.current) {
      this.audioRef.current.currentTime = time;
      return this.audioRef.current.currentTime;
    }
  };

  handleChangeMusicVolume = (e, { value }) => this.changeVolume(value);
  handleChangeMusicCurrentTime = (e, { value }) => this.changeCurrentTime(value * this.state.musicTime);

  onTimeUpdate = e => this.setCurrentTime(e.target.currentTime);
  onVolumeChange = e => this.setMusicVolume(e.target.volume);
  onEnded = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlay = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPause = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onWaiting = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlaying = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onLoadedData = () => this.setStateWhenAudioLoaded();

  onClose = () => this.props.playingMusicActions.changeMusic({ id: null });

  setStateWhenAudioLoaded = () => {
    if (this.audioRef && this.audioRef.current) {
      this.setState({
        musicTime: this.audioRef.current.duration,
        musicVolume: this.audioRef.current.volume,
        currentMusicTime: this.audioRef.current.currentTime,
      }, () => this.props.playingMusicActions.changeIsPlaying(!this.audioRef.current.paused));
    }
  };

  render() {
    const { className, playingMusic } = this.props;
    const { currentMusicTime, musicTime, musicVolume } = this.state;
  
    return (
      <div id="bottom-player" className={cn('ui-bottom-player relative flex justify-center w-full h-16 animated fadeInDown fast', className)}>
        <Icon
          iName="times"
          className="text-xs text-white absolute right-0 mx-3 top-haft translate-y-mhaft"
          onClick={this.onClose}
        />
        <audio
          id="playing-music-audio"
          controls
          loop={playingMusic.mode === mode.LOOP}
          className="hidden"
          ref={this.audioRef}
          onTimeUpdate={this.onTimeUpdate}
          onLoadedData={this.onLoadedData}
          onEnded={this.onEnded}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onWaiting={this.onWaiting}
          onPlaying={this.onPlaying}
          onVolumeChange={this.onVolumeChange}
        >
          <source src={playingMusic.src} type="audio/mpeg" />
        </audio>
        <section className="container flex items-center h-full w-full relative px-3">
          <div className="absolute top-0 left-0 translate-y-haft translate-x-mfull w-full z-10" style={{ height: 'calc(100vh - 8rem)' }}>
            <PlayListBox className="h-72 w-full" />
          </div>
          <div className="flex cursor-pointer overflow-hidden w-72">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className={cn('ui-bottom-player__avatar-img w-full h-full', { 'animated spin linear infinite slow': playingMusic.isPlaying })}
                src={playingMusic.img}
                alt="current-playing-music"
              />
            </div>
            <Link href="/song">
              <div className="flex flex-col justify-center ml-3">
                <div className="flex flex-col justify-center">
                  <span className="text-teal-500 text-base hover:underline">{playingMusic.name}</span>
                  <span className="text-white text-xs">{playingMusic.singer.name}</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center flex-1">
            <Icon iName="step-backward" className="text-base text-white mr-4" />
            {playingMusic.isPlaying
              ? <Icon iName="pause" className="text-base text-teal-500" onClick={this.pauseMusic} />
              : <Icon iName="play" className="text-base text-white" onClick={this.playMusic} />
            }
            <Icon iName="step-forward" className="text-base text-white ml-4" />
            <Slider
              className="ml-4 flex-1 --custom-track"
              percent={currentMusicTime/musicTime}
              onChange={this.handleChangeMusicCurrentTime}
            />
            <div className="ml-4 text-white text-xs flex items-center font-serif w-10">
              <span>{calcTime(musicTime - currentMusicTime)}</span>
            </div>
            <Icon iName="volume-up" className="text-base text-white ml-4" />
            <Slider
              className="ml-3"
              style={{ width: '5rem' }}
              percent={musicVolume}
              onChange={this.handleChangeMusicVolume}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default withPlayingMusic(BottomPlayer);
