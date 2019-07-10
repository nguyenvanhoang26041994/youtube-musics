import './GlobalMusicPlayer.scss';
import cn from 'classnames';
import fp from 'lodash/fp';
import { Icon, Slider, BlurBackground } from '../../components/core';
import { mode } from '../../constants/playing-music';
import AudioAnalyzer from '../../components/AudioAnalyzer';
import withPlayingList from '../../HOC/withPlayingList';
import withPlayingMusic from '../../HOC/withPlayingMusic';

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
  };

  musicRef = React.createRef(null);
  analyserRef = React.createRef(null);

  componentDidMount() {
    this.musicRef.current.play();
    this.setState({ rendered: true });
    this.setStateWhenAudioLoaded();

    this.canvas = this.analyserRef.current;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
  }

  loopFrame = (fbcArray) => {
    const size = 2;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const rootRadius = 60;
    const R = rootRadius + fbcArray[0] / 30;
    const A = this.canvas.width / 2;
    const B = this.canvas.height / 2;

    const _length = (360 / size);
    for (let i = 0; i < _length; i++) {
      const t = ((230 - (i * size)) / 360) * 2 * Math.PI;

      let x = A + R * Math.cos(t);
      let y = B + R * Math.sin(t);

      let x1 = A + (fbcArray[i]/6 + R) * Math.cos(t);
      let y1 = B + (fbcArray[i]/6 + R) * Math.sin(t);

      this.ctx.beginPath();

      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x1, y1);
      const red = (56 - 17) * (i / _length) + 17;
      const green = (239 - 153) * (i / _length) + 153;
      const blue = (125 - 142) * (i / _length) + 142;
      this.ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
      this.ctx.lineWidth = size;
      this.ctx.lineCap = 'round';
      this.ctx.stroke();
      this.ctx.closePath();
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.playingMusic.id !== prevProps.playingMusic.id && this.musicRef && this.musicRef.current) {
      this.musicRef.current.load();
      this.musicRef.current.play();
    }
  }

  onAnalyzer = (fbcArray) => {
    if (!this.canvas) {
      return;
    }
    this.loopFrame(fbcArray);
  };

  setStateWhenAudioLoaded = () => {
    if (this.musicRef && this.musicRef.current) {
      this.setState({
        musicTime: this.musicRef.current.duration,
        musicVolume: this.musicRef.current.volume,
        currentMusicTime: this.musicRef.current.currentTime,
      }, () => this.props.playingMusicActions.changeIsPlaying(!this.musicRef.current.paused));
    }
  };

  onLoadedData = () => this.setStateWhenAudioLoaded();

  playMusic = () => this.musicRef && this.musicRef.current && this.musicRef.current.play();
  pauseMusic = () => this.musicRef && this.musicRef.current && this.musicRef.current.pause();

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

  onTimeUpdate = e => this.setState({ currentMusicTime: e.target.currentTime });
  onVolumeChange = e => this.setState({ volume: e.target.volume });
  onEnded = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlay = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPause = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onWaiting = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);
  onPlaying = e => this.props.playingMusicActions.changeIsPlaying(!e.target.paused);

  render() {
    const { className, playingMusic, playingMusicActions, playingList } = this.props;
    const { currentMusicTime, musicTime, number } = this.state;

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
        <div className="w-full z-10" style={{ height: 'calc(100vh - 6.5em)' }}>
          <div className="container flex mx-auto h-full relative">
            <BlurBackground />
            <div className="w-full h-full absolute top-0 left-0" />
            <div className="h-full w-9/12 relative flex justify-center items-center z-0">
              <div className="absolute top-0 left-0">
                <canvas className="w-64 h-64" ref={this.analyserRef}></canvas>
              </div>
            </div>
            <div className="h-full w-3/12 p-1 z-0">
              <ul>
                {playingList.musics.map(music => (
                  <li key={music.id} className="mb-1">
                    <div className="flex items-center relative h-10 px-2 cursor-pointer">
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm text-white" onClick={() => this.props.playingMusicActions.changeMusic(music)}>{music.name}</span>
                        <span className="text-xs text-gray-500">{music.singer.name}</span>
                      </div>
                      <Icon iName="ellipsis-h" className="text-sm text-white absolute right-0 mr-2" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full relative --gradient-bg">
          <div className="container flex items-center h-10 mx-auto z-10">
            <div className="flex items-center">
              <Icon iName="step-backward" className="text-base text-white mr-4" />
              <div className={cn('flex items-center justify-center w-8 h-8 rounded-full transition-fast', { 'bg-white': playingMusic.isPlaying })}>
                {playingMusic.isPlaying
                  ? <Icon iName="pause" className="text-xs text-teal-500" onClick={this.pauseMusic} />
                  : <Icon iName="play" className="text-xs text-teal-500" onClick={this.playMusic} />
                }
              </div>
              <Icon iName="step-forward" className="text-xs text-white ml-4" />
            </div>
            <Slider
              className="ml-4 flex-1"
              percent={currentMusicTime/musicTime}
              onChange={this.handleChangeCurrentMusicTime}
            />
          </div>
        </div>
        <AudioAnalyzer audioNode={this.musicRef} analyser={this.onAnalyzer} />
      </div>
    );
  }
}

export default fp.compose(
  withPlayingList,
  withPlayingMusic
)(GlobalMusicPlayer);
// test
// this.ctx.beginPath();
// this.ctx.rect((i * 8) + 70, canvasHeight - 30, 6, - (fbcArray[i]/(7)));
// this.ctx.fillStyle = `rgb(111, ${55 + i * 2}, 245)`;
// this.ctx.fill();