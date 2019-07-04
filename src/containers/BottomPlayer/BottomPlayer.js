import './BottomPlayer.scss';
import cn from 'classnames';
import React from 'react';
import Link from 'next/link';
import { Icon, Slider } from '../../components/core';
import withPlayingMusic from '../../HOC/withPlayingMusic';
import { mode } from '../../constants/playing-music';
import { calcTime } from '../../utils/time';

class BottomPlayer extends React.Component {
  state = {
    musicTime: 0,
    currentMusicTime: 0,
    musicVolume: 0,
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
      <div id="bottom-player" className={cn('ui-bottom-player bg-primary-gradient flex justify-center w-full h-20', className)}>
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
        <section className="container flex items-center h-full w-full">
          <div className="flex cursor-pointer overflow-hidden mr-10">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className={cn('ui-bottom-player__avatar-img w-full h-full', { 'spin --animated': playingMusic.isPlaying })}
                src={playingMusic.img}
                alt="cureent-playing-music"
              />
            </div>
            <Link href="/song">
              <div className="flex flex-col justify-center ml-3">
                <div className="flex flex-col justify-center">
                  <span className="text-teal-500 text-base font-bold hover:underline">{playingMusic.name}</span>
                  <span className="text-white text-xs">{playingMusic.singer.name}</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <Icon iName="step-backward" className="text-base text-white mr-4" />
            {playingMusic.isPlaying
              ? <Icon iName="pause" className="text-base text-blue-500" onClick={this.pauseMusic} />
              : <Icon iName="play" className="text-base text-white" onClick={this.playMusic} />
            }
            <Icon iName="step-forward" className="text-base text-white ml-4" />
            <Slider
              className="ml-10"
              style={{ width: '20rem' }}
              percent={currentMusicTime/musicTime}
              onChange={this.handleChangeMusicCurrentTime}
            />
            <div className="ml-2 text-white text-xs flex items-center font-serif w-10">
              <span>{calcTime(musicTime - currentMusicTime)}</span>
            </div>
            <Icon iName="volume-up" className="text-base text-white ml-10" />
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
