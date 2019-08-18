import { useEffect } from 'react';


const onFullScreen = e => {
  const documentElement = document.documentElement;

  try {
    if (e.target.checked) {
      if (documentElement.requestFullscreen) {
        return documentElement.requestFullscreen();
      }

      if (documentElement.mozRequestFullScreen) {
        return documentElement.mozRequestFullScreen();
      }

      if (documentElement.msRequestFullscreen) {
        return documentElement.msRequestFullscreen();
      }
    }

    if (document.exitFullscreen) {
      return document.exitFullscreen();
    }

    if (document.webkitExitFullscreen) {
      return document.webkitExitFullscreen();
    }

    if (document.msExitFullscreen) {
      return document.msExitFullscreen();
    }
  } catch (e) {
    // DO SOME THING
  }
};

export default function useFullScreen(elm) {
  let requestFullScreen = f => f;
  let exitFullscreen = f => f;

  return useEffect(
    () => {
      const _elm = elm || document.documentElement;
      if (_elm.requestFullscreen) {
        requestFullScreen = () => _elm.requestFullscreen();
      }
      if (_elm.mozRequestFullScreen) {
        requestFullScreen = () => _elm.mozRequestFullScreen();
      }
      if (_elm.msRequestFullscreen) {
        requestFullScreen = () => _elm.msRequestFullscreen();
      }
      if (document.exitFullscreen) {
        requestFullScreen = () => document.exitFullscreen();
      }
      if (document.webkitExitFullscreen) {
        requestFullScreen = () => document.webkitExitFullscreen();
      }
      if (document.msExitFullscreen) {
        requestFullScreen = () => document.msExitFullscreen();
      }
    },
    { requestFullScreen, exitFullscreen }
  );
}
