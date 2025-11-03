import { useEffect, useState } from 'react'
import './App.css'
import { scenes, videoForEnding, type Choice, type Ending, type Scene } from './scenes';
import { InnerScene } from './inner-scene';
import { useVideo } from './use-video';

function App() {
  const [sceneIter, setSceneIter] = useState(0);
  const [ending, setEnding] = useState<Ending | ''>('');
  const [resultStory, setResultStory] = useState('');
  
  const video = useVideo();

  const scene = (): Scene => {
    if (sceneIter < scenes.length) {
      return scenes[sceneIter];
    } else {
      return {
        text: ending ? ending : 'Perfect',
        // img: 'noodles6.jpg',
        startVideo: videoForEnding(ending as Ending),
        choices: []
      }
    }
  }

  useEffect(() => {
    const sc = scene();
    if (sc.startVideo) {
      console.log('scene has video'); 
      video.newVideo(sc.startVideo);
    } else if (sc.img && !video.isPlaying) {
      console.log('scene has image');
      video.setPath('');
    }
  }, [sceneIter]);

  
  const clickButton = (choice: Choice) => {
    setSceneIter(sceneIter + 1);
    if (choice.ending) {
      setEnding(choice.ending);
      // video.newVideo(videoForEnding(choice.ending));
    }
    if (choice.result) {
      setResultStory(choice.result);
    } else {
      setResultStory('');
    }
    if (choice.video) {
      console.log('choice has video');
      video.newVideo(choice.video);
    }
  }

  return <InnerScene
    scene={scene()}
    resultText={resultStory}
    clickButton={clickButton}
    video={video}
  />;
}

export default App
