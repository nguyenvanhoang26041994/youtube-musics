import React, { useRef } from 'react';
import cn from 'classnames';
import fp from 'lodash/fp';
import styled from 'styled-components';
import Link from 'next/link'
import { Icon, Slider, Image } from '../../components/core';
import PlayingList from '../../containers/PlayingList';
import { mode } from '../../constants/playing-list';
import withPlayingList from '../../HOC/withPlayingList';
import withPlayingMusic from '../../HOC/withPlayingMusic';
import withPlayerActions from '../../HOC/withPlayerActions';
import useClickOutside from '../../hooks/useClickOutside';
import { calcTime } from '../../utils/time';

const listMode = Object.freeze({
  [mode.LOOP]: 'loop',
  [mode.REPEAT]: 'repeat',
  [mode.SHUFFLE]: 'shuffle',
});

const GlobalMusicPlayerWrapper = styled.div`
`;

const Audio = ({ className, src, musicRef, ...otherProps }) => (
  <audio className={cn('hidden', className)} ref={musicRef} {...otherProps}>
    <source src={src} />
  </audio>
);

const PlaylistModal = ({ controllerRef, handleHiddenBiggerPlayer }) => {
  const playlistModalRef = useRef();
  const handler = event => {
    if (controllerRef && controllerRef.current && controllerRef.current.contains(event.target)) {
      return;
    }
    return handleHiddenBiggerPlayer();
  };

  useClickOutside(playlistModalRef, handler);

  return (
    <div className="global-music-player__biger-player-container container container-custom flex mx-auto h-full relative" ref={playlistModalRef}>
      <Icon
        name="chevron-arrow-down"
        color="teal-600"
        size="xs"
        className="absolute top-0 right-0 z-20 m-2"
        onClick={handleHiddenBiggerPlayer}
      />
      <PlayingList className="w-full h-full bg-lizard shadow-lg" />
    </div>
  );
}

class GlobalMusicPlayer extends React.Component {
  state = {
    musicTime: 0,
    currentMusicTime: 0,
    musicVolume: 0,
    isShowBiggerPlayer: false,
    isMusicReady: false,
  };

  musicRef = React.createRef(null);
  controllerRef = React.createRef(null);

  componentDidMount() {
    this.setStateWhenAudioLoaded();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playingMusic.id && this.props.playingMusic.id !== prevProps.playingMusic.id && this.musicRef && this.musicRef.current) {
      this.musicRef.current.load && this.musicRef.current.load();
      this.musicRef.current.play && this.musicRef.current.play();
    }

    if (!this.props.playingMusic.src && !this.musicRef.current.paused) {
      this.musicRef.current.pause && this.musicRef.current.pause();
    }

    if (this.props.playingList.id !== prevProps.playingList.id) {
      this.handleShowBiggerPlayer();
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

  playMusic = () => this.musicRef && this.musicRef.current && this.musicRef.current.play && this.musicRef.current.play();
  pauseMusic = () => this.musicRef && this.musicRef.current && this.musicRef.current.pause && this.musicRef.current.pause();
  changeVolume = volume => {
    if (this.musicRef && this.musicRef.current) {
      this.musicRef.current.volume = volume;
    }
  };
  changeCurrentTime = time => {
    if (this.musicRef && this.musicRef.current) {
      this.musicRef.current.currentTime = time;
    }
  };

  handleChangeMusicVolume = (e, { value }) => this.changeVolume(value);
  handleChangeCurrentMusicTime = (e, { value }) => this.changeCurrentTime(value * this.state.musicTime);
  handleHiddenBiggerPlayer = () => this.setState({ isShowBiggerPlayer : false });
  handleShowBiggerPlayer = () => this.setState({ isShowBiggerPlayer : true });
  toggleShowBiggerPlayer = () => this.setState(prevState => ({ ...prevState, isShowBiggerPlayer: !prevState.isShowBiggerPlayer }))

  onTimeUpdate = e => this.setState({ currentMusicTime: e.target.currentTime });
  onVolumeChange = e => this.setState({ musicVolume: e.target.volume });
  onEnded = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlay = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPause = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onWaiting = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlaying = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onEnded = () => this.props.playerActions.goNextSong();
  onPlayNext = () => this.props.playerActions.goNextSong();
  onPlayPrev = () => this.props.playerActions.goPrevSong();
  onLoadedData = this.setStateWhenAudioLoaded;

  render() {
    const { className, playingMusic, playingList, playingListActions, playerActions } = this.props;
    const { currentMusicTime, musicTime, musicVolume, isShowBiggerPlayer } = this.state;
    const shouldShowOff = playingMusic.src;

    return (
      <GlobalMusicPlayerWrapper
        id="global-music-player"
        className={cn('ui-global-music-player fixed bottom-0 left-0 w-full', className)}
      >
        <Audio
          src={playingMusic.src}
          musicRef={this.musicRef}
          loop={playingList.mode === mode.REPEAT}
          onTimeUpdate={this.onTimeUpdate}
          onLoadedData={this.onLoadedData}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onWaiting={this.onWaiting}
          onPlaying={this.onPlaying}
          onVolumeChange={this.onVolumeChange}
          onEnded={this.onEnded}
        />
        <div
          className="global-music-player__biger-player relative w-full z-10 overflow-hidden transition-fast"
          style={{ height: shouldShowOff && isShowBiggerPlayer ? 'calc(100vh - 8rem)' : 0 }}
        >
          <PlaylistModal
            handleHiddenBiggerPlayer={this.handleHiddenBiggerPlayer}
            controllerRef={this.controllerRef}
          />
        </div>
        <div className={cn('w-full relative bg-lizard transition-normal', { 'opacity-0': !shouldShowOff })} ref={this.controllerRef}>
          <Icon
            name="close"
            size="sm"
            color="white"
            className="absolute z-10 right-0 top-haft translate-x-mhaft-y-mhaft"
            onClick={playerActions.resetPlayinglistAndPlayingMusic}
          />
          <div className="container-custom container relative flex items-center h-16 mx-auto z-10 px-1">
            <div className="flex mr-2 items-center mr-5">
              <Image className="h-10 w-10 mr-2 cursor-pointer rounded-sm" src={playingMusic.img} />
              <div className="flex flex-col">
                <div className="text-sm text-white cursor-pointer w-32 overflow-hidden truncate font-bold">
                  <Link href={`/music?id=${playingMusic.id}`} as={`/music/${playingMusic.id}`}>
                    <a>{playingMusic.name}</a>
                  </Link>
                </div>
                <div className="text-xs text-gray-500 cursor-pointer w-32 overflow-hidden truncate flex">
                  {playingMusic.singers.map((singer, idx) => (
                    <Link href={`/profile?id=${singer.id}`} as={`/profile/${singer.id}`} key={singer.id}>
                      <a>
                        <h3 className="text-xs font-bold text-teal-400 flex">
                          <span>{singer.name}</span>
                          <span className="mr-1">{playingMusic.singers.length <= idx + 1 ? '' : ','}</span>
                        </h3>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="step-backward" size="xs" color="white" className="mr-4" onClick={this.onPlayPrev} />
              <div className="flex items-center justify-center rounded-full bg-white h-8 w-8">
                {playingMusic.isPlaying
                  ? <Icon name="pause" size="xs" color="teal-500" onClick={this.pauseMusic} />
                  : <Icon name="play" size="xs" color="teal-500" onClick={this.playMusic} />
                }
              </div>
              <Icon name="step-forward" size="xs" color="white" className="ml-4" onClick={this.onPlayNext} />
            </div>
            {playingList.id && playingList.musics.length && (
              <Icon
                name="list"
                size="sm"
                color={isShowBiggerPlayer && playingMusic.src ? 'teal-400': 'white'}
                className="ml-5" onClick={this.toggleShowBiggerPlayer}
              />
            )}
            <div className="hidden xl:block lg:block md:block flex-1 relative mx-5">
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
            <div className="flex items-center">
              <Icon
                name={listMode[playingList.mode] || 'repeat'}
                size="sm" color="teal-400"
                className="mx-2"
                onClick={playingListActions.changeToNextMode}
              />
            </div>
            <div className="flex items-center w-32 ml-5 hidden xl:flex lg:flex md:flex ">
              <Icon name="volume" size="xl" color="white" onClick={this.pauseMusic} />
              <Slider
                className="w-full ml-2"
                percent={musicVolume}
                onChange={this.handleChangeMusicVolume}
              />
            </div>
          </div>
        </div>
      </GlobalMusicPlayerWrapper>
    );
  }
}

export default fp.compose(
  withPlayerActions,
  withPlayingList,
  withPlayingMusic
)(GlobalMusicPlayer);
