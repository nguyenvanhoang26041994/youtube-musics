import React from 'react';
export default class extends React.Component {
  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext('2d');

    this.ctx.beginPath();
    this.ctx.moveTo(200, 198);
    this.ctx.lineTo(400, 196);
    this.ctx.lineTo(400, 204);
    this.ctx.lineTo(200, 202);
    this.ctx.lineTo(200, 198);
    this.ctx.fillStyle = 'purple';
    this.ctx.fill();
  }

  canvasRef = React.createRef(null);

  render() {
    return (
      <div className="fixed h-screen w-full z-10">
        <style jxs global>
          {`
            #global-music-player {
              display: none;
            }
          `}
        </style>
        <canvas ref={this.canvasRef} width="700px" height="700px" />
      </div>
    );
  }
}