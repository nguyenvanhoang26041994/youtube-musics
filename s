  
    analyserRef = React.createRef(null);

  componentDidMount() {
    this.musicRef.current && this.musicRef.current.play();
    this.setState({ rendered: true });
    this.setStateWhenAudioLoaded();

    this.canvas = this.analyserRef.current;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.canvas.classList = '';
    this.ctx = this.canvas.getContext('2d');
  }
  loopFrame = (fbcArray) => {
    const size = 1;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    const rootRadius = 80;
    const R = rootRadius + fbcArray[0] / 5;
    const A = this.canvas.width / 2;
    const B = this.canvas.height / 2;

    const _length = (360 / size);
    for (let i = 0; i < _length; i++) {
      const t = ((230 - (i * size)) / 360) * 2 * Math.PI;

      let x = A + R * Math.cos(t);
      let y = B + R * Math.sin(t);

      let x1 = A + (fbcArray[i]/3 + R) * Math.cos(t);
      let y1 = B + (fbcArray[i]/3 + R) * Math.sin(t);

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

    onAnalyzer = (fbcArray) => {
    if (!this.canvas) {
      return;
    }
    this.loopFrame(fbcArray);
  };


  <AudioAnalyzer audioNode={this.musicRef} analyser={this.onAnalyzer} />


  import React from 'react';
import PropTypes from 'prop-types';

export default class AudioAnalyzer extends React.Component {
  componentDidMount() {
    this.context = new AudioContext();
    this.analyser = this.context.createAnalyser();
    this.context
      .createMediaElementSource(this.props.audioNode.current)
      .connect(this.analyser);
    this.analyser.connect(this.context.destination);
    this.frameLooper();
  }

  frameLooper = () => {
    window.requestAnimationFrame(this.frameLooper);
    this.fbcArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(this.fbcArray);

    return this.props.analyser(this.fbcArray);
  };

  render() {
    return null;
  }
}
AudioAnalyzer.propTypes = {
  analyser: PropTypes.func,
};
AudioAnalyzer.defaultProps = {
  analyser: f => f,
};
