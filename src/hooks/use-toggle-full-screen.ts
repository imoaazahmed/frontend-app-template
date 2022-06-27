import { useState, useEffect } from 'react';

export const useToggleFullScreen = () => {
  const [_document, setDocument] = useState<Document | any>();

  // Get document object
  useEffect(() => {
    setDocument(document);
  }, [_document]);

  function toggleFullScreen() {
    if (
      !_document.fullscreenElement &&
      !_document.mozFullScreenElement &&
      !_document.webkitFullscreenElement &&
      !_document.msFullscreenElement
    ) {
      // current working methods
      if (_document.documentElement.requestFullscreen) {
        _document.documentElement.requestFullscreen();
      } else if (_document.documentElement.msRequestFullscreen) {
        _document.documentElement.msRequestFullscreen();
      } else if (_document.documentElement.mozRequestFullScreen) {
        _document.documentElement.mozRequestFullScreen();
      } else if (_document.documentElement.webkitRequestFullscreen) {
        _document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (_document.exitFullscreen) {
        _document.exitFullscreen();
      } else if (_document.msExitFullscreen) {
        _document.msExitFullscreen();
      } else if (_document.mozCancelFullScreen) {
        _document.mozCancelFullScreen();
      } else if (_document.webkitExitFullscreen) {
        _document.webkitExitFullscreen();
      }
    }
  }

  return toggleFullScreen;
};
