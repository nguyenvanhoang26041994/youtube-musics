import React, { useEffect } from 'react';
import isSever from '../../utils/isSever';

let audioNode = null;
let context = null;
let analyser = null;

if (!isSever) {
  try {
    audioNode = document.getElementById('music-audio');
    context = new AudioContext();
    analyser = context.createAnalyser();
    context
      .createMediaElementSource(audioNode)
      .connect(analyser);
    analyser.connect(context.destination);
  } catch (e) {}
}

export default class AudioAnalyzer extends React.Component {
  canvasRef = React.createRef();

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.audioNode = document.getElementById('music-audio');
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext('2d');

    this.frameLooper();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidCatch() {
    return null;
  }

  frameLooper = () => {
    window.requestAnimationFrame(this.frameLooper);
    this.fbcArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(this.fbcArray);

    return this.onAnalyzer(this.fbcArray);
  };

  onAnalyzer = (fbcArray) => {
    if (!this.canvasRef.current) {
      return;
    }
    this.loopFrame2(fbcArray);
  };

  loopFrame2 = fbcArray => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i <= 30; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(200 + i * 7, 200);
      this.ctx.lineTo(200 + i * 7, 200 + fbcArray[i * 20] / 5);
      this.ctx.strokeStyle = `rgb(${255}, ${255}, ${255})`;
      this.ctx.lineWidth = 4;
      this.ctx.lineCap = 'round';
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  // loopFrame = (fbcArray) => {
  //   const size = 1;

  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
  //   const rootRadius = 80;
  //   const R = rootRadius + fbcArray[0] / 5;
  //   const A = this.canvas.width / 2;
  //   const B = this.canvas.height / 2;

  //   const _length = (360 / size);
  //   for (let i = 0; i < _length; i++) {
  //     const t = ((230 - (i * size)) / 360) * 2 * Math.PI;

  //     let x = A + R * Math.cos(t);
  //     let y = B + R * Math.sin(t);

  //     let x1 = A + (fbcArray[i]/3 + R) * Math.cos(t);
  //     let y1 = B + (fbcArray[i]/3 + R) * Math.sin(t);

  //     this.ctx.beginPath();

  //     this.ctx.moveTo(x, y);
  //     this.ctx.lineTo(x1, y1);
  //     const red = (56 - 17) * (i / _length) + 17;
  //     const green = (239 - 153) * (i / _length) + 153;
  //     const blue = (125 - 142) * (i / _length) + 142;
  //     this.ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
  //     this.ctx.lineWidth = size;
  //     this.ctx.lineCap = 'round';
  //     this.ctx.stroke();
  //     this.ctx.closePath();
  //   }
  // };

  render() {
    return (
      <canvas ref={this.canvasRef} className="w-full h-full" />
    );
  }
}
