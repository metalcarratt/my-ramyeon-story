import { useRef, useState } from 'react';

export const useVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [nextVideo, setNextVideo] = useState('');

  const changeVideo = (newVideo: string) => {
    console.log('change video to ', newVideo);
    setPath(newVideo);
    setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      console.log('change src');
      video.src = newVideo;
      console.log('load');
      video.load();
      console.log('play');
      video.play();
    }
  };

  const videoEnded = () => {
    console.log('video ended');
    if (nextVideo) {
      changeVideo(nextVideo);
      setNextVideo('');
      return;
    }

    setIsPlaying(false);
  };

  const newVideo = (videoName: string) => {
    console.log('new video');
    if (isPlaying) {
      setNextVideo(videoName);
      return;
    }

    changeVideo(videoName);
  };

  const skipToEnd = () => {
    console.log('skip clicked');
    const video = videoRef.current;
    console.log('video.duration', video?.duration);
    if (video && video.duration) {
      video.currentTime = video.duration;
    }
  };

  return {
    videoEnded,
    newVideo,
    skipToEnd,
    isPlaying,
    path,
    videoRef,
    setPath,
  };
};

export type UseVideoType = ReturnType<typeof useVideo>;
