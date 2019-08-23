import React, { useEffect, useState } from 'react';
import fp from 'lodash/fp';

export default function usePlayingMusicNode() {
  const [currentTime, setCurrentTime] = useState(0);

  const onTimeUpdate = e => setCurrentTime(e.target.currentTime);
  const onDebounceTimeUpdate = fp.debounce(333, onTimeUpdate);

  useEffect(() => {
    const audioNode = document.getElementById('music-audio');
    audioNode.addEventListener('timeupdate', onDebounceTimeUpdate);

    return () => {
      audioNode.removeEventListener('timeupdate', onDebounceTimeUpdate);
    }
  }, []);

  return [currentTime, setCurrentTime];
}
