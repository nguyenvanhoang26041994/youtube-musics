import React, { useEffect, useState, useLayoutEffect } from 'react';
import fp from 'lodash/fp';

export default function usePlayingMusicNode(audioNode) {
  const [currentTime, setCurrentTime] = useState(0);

  const onTimeUpdate = e => setCurrentTime(e.target.currentTime);
  const onDebounceTimeUpdate = fp.debounce(333, onTimeUpdate);

  useEffect(() => {
    const _audioNode = audioNode || document.getElementById('music-audio');
    _audioNode.addEventListener('timeupdate', onDebounceTimeUpdate);

    return () => {
      _audioNode.removeEventListener('timeupdate', onDebounceTimeUpdate);
    }
  });

  return [currentTime, setCurrentTime];
}

/**
 * 
    onTimeUpdate={this.onTimeUpdate}
    onLoadedData={this.onLoadedData}
    onPlay={this.onPlay}
    onPause={this.onPause}
    onWaiting={this.onWaiting}
    onPlaying={this.onPlaying}
    onVolumeChange={this.onVolumeChange}
    onEnded={this.onEnded}
 */
