import type { UseVideoType } from "./use-video";

export const VideoElem = ({video}: {video: UseVideoType}) => {
  console.log('video path', video.path);
  const videoSrc = `${import.meta.env.BASE_URL}${video.path}`;

  return (
    <video className="videoElem" width="640" height="360" autoPlay ref={video.videoRef} onEnded={video.videoEnded}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}