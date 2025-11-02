import { ImgElem } from "./img-elem";
import { VideoElem } from "./video-elem";
import type { Choice, Scene } from "./scenes";
import type { UseVideoType } from "./use-video";
import { useEffect, useState } from "react";

export const InnerScene = ({scene, resultText, clickButton, video}: {
  scene: Scene, 
  resultText: string, 
  clickButton: (choice: Choice) => void,
  video: UseVideoType,
}) => {
  const [overlayWidth, setOverlayWidth] = useState('100%');

  const showText = !video.isPlaying && (scene.text || resultText);

  useEffect(() => {
    if (video.videoRef.current !== null) {
      setOverlayWidth(`${video.videoRef.current.offsetWidth}px`);
    } else {
      setOverlayWidth('100%');
    }
  }, [video.path])


  return (
    <>
      {video.path ? <VideoElem video={video} /> : scene.img && <ImgElem path={scene.img} />}
      {
        <div className="overlay" style={{width: overlayWidth}}>
          {showText &&
            <p>
              {resultText}{scene.text}
            </p>
          }
          {
            !video.isPlaying &&
              <div className="actions">
                {scene.choices.map(choice => 
                  <button className="action" onClick={() => clickButton(choice)}>{choice.text}</button>
                )}
              </div>
          }
          {video.isPlaying && <button onClick={video.skipToEnd} >Skip</button>}
        </div>
      }
    </>
  );
}