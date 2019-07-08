import React from 'react';
import PropTypes from 'prop-types';

export default class AudioAnalyzer extends React.Component {
  componentDidMount() {
    return this.initAnalyner();
  }

  shouldComponentUpdate() {
    return false;
  }

  initAnalyner = () => {
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
