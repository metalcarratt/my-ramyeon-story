import { useRef, useState } from 'react';

export const useVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [path, setPath] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoEnded = () => setIsPlaying(false);

  const newVideo = (videoName: string) => {
    setPath(videoName);
    setIsPlaying(true);
    const video = videoRef.current;
    if (video) {
      video.src = videoName;
      video.load();
      video.play();
    }
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
