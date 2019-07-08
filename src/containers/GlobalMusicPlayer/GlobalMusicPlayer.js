import './GlobalMusicPlayer.scss';
import cn from 'classnames';
import fp from 'lodash/fp';
import { Icon, Slider } from '../../components/core';
import { mode } from '../../constants/playing-music';
import AudioAnalyzer from '../../components/AudioAnalyzer';
import withPlayingList from '../../HOC/withPlayingList';
import withPlayingMusic from '../../HOC/withPlayingMusic';

const Audio = ({ className, src, musicRef, ...otherProps }) => (
  <audio className={cn('hidden', className)} ref={musicRef} {...otherProps}>
    <source src={src} />
  </audio>
);
// this.ctx.beginPath();
// this.ctx.moveTo(200, 500 - 5);
// this.ctx.lineTo(350, 500 - 10);
// this.ctx.lineTo(350, 500 + 10);
// this.ctx.lineTo(200, 500 + 5);
// this.ctx.lineTo(200, 500 - 5);
// this.ctx.fillStyle = 'red';
// this.ctx.fill();
// this.ctx.closePath();
function hinhThangDeu({ x, y, deg, long }, ctx) {
  // const startX = x - 3;
  // const startY = y - 3;
  // const length = start + long / 7;
  
  // ctx.beginPath();
  // ctx.moveTo(startX, length - 6);
  // ctx.lineTo(x - 20, y);
  // ctx.strokeStyle = 'red';
  // ctx.stroke();
  // ctx.closePath();
}

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
  }

  loopFrame = (fbcArray) => {

    const canvasWidth = this.canvas.offsetWidth;
    const canvasHeight = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    const _R_ = 80;
    const _A_ = 400;
    const _B_ = 250;

    this.ctx.beginPath();
    this.ctx.arc(_A_, _B_, _R_, 0, 2 * Math.PI);
    // this.ctx.stroke();
    this.ctx.closePath();

  for (let i = 0; i < 60; i++) {
      const t = ((i * 6) / 360) * 2 * Math.PI;

      let x = _A_ + (_R_ * Math.cos(t));
      let y = _B_ + (_R_ * Math.sin(t));

      this.ctx.beginPath();
      this.ctx.fillRect(x, y, 6, -fbcArray[i]/3 + 6);
      this.ctx.fillStyle = `rgb(111, ${66 + (i * 2)}, 245)`;
      this.ctx.fill();
      this.ctx.closePath();

      // hinhThangDeu({ x: x + 300, y: y + 300, deg: t, long: fbcArray[i] }, this.ctx);
    }

    // this.ctx.beginPath();
    // this.ctx.moveTo(200, 500 - 5);
    // this.ctx.lineTo(350, 500 - 10);
    // this.ctx.lineTo(350, 500 + 10);
    // this.ctx.lineTo(200, 500 + 5);
    // this.ctx.lineTo(200, 500 - 5);
    // this.ctx.fillStyle = 'red';
    // this.ctx.fill();
    // this.ctx.closePath();
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
        <div className="w-full z-10" style={{ height: 'calc(100vh - 8rem)' }}>
          <div className="container flex mx-auto h-full relative">
            <div className="bg-primary w-full h-full absolute top-0 left-0" />
            <div className="h-full w-3/4 relative flex justify-center items-center">
              {/* <div class="h-72 w-72 rounded-full" style={{ background: `linear-gradient(to right, rgba(${number}, 30, 30), rgba(30, ${number}, 30))`, transition: 'all 0.1s', transform: `scale(${((255 + number)/255)})` }}></div> */}
              <div className="absolute top-0 left-0 h-full w-full">
                <canvas height="742px" width="768px" ref={this.analyserRef}></canvas>
              </div>
            </div>
            <div className="h-full w-1/4 bg-primary-blur">
              <ul>
                {playingList.musics.map(music => (
                  <li key={music.id} className="mb-1">
                    <div className="flex items-center h-10 px-2 cursor-pointer" onClick={() => this.props.playingMusicActions.changeMusic(music)}>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm text-gray-800">{music.name}</span>
                        <span className="text-xs text-gray-600">{music.singer.name}</span>
                      </div>
                    </div>
                    <div className="bg-gray-500" style={{ height: '1px' }}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full relative bg-blue-300">
          <div className="container flex items-center h-16 mx-auto z-10">
            <div className="flex items-center">
              <Icon iName="step-backward" className="text-base text-white mr-4" />
              <div className={cn('flex items-center justify-center w-10 h-10 rounded-full transition-fast', { 'bg-white': playingMusic.isPlaying })}>
                {playingMusic.isPlaying
                  ? <Icon iName="pause" className="text-base text-teal-500" onClick={this.pauseMusic} />
                  : <Icon iName="play" className="text-base text-teal-500" onClick={this.playMusic} />
                }
              </div>
              <Icon iName="step-forward" className="text-base text-white ml-4" />
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