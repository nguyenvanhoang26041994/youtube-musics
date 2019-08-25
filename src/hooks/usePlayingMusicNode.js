import { useEffect, useState } from 'react';

let node = {};

export default function usePlayingMusicNode() {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audioNode = document.getElementById('music-audio');
    node = audioNode;

    const onTimeUpdate = e => setCurrentTime(e.target.currentTime);

    audioNode.addEventListener('timeupdate', onTimeUpdate);

    setDuration(audioNode.duration);
    return () => {
      audioNode.removeEventListener('timeupdate', onTimeUpdate);
    }
  }, [node.src, node.duration]);

  return [node, duration, currentTime];
}
