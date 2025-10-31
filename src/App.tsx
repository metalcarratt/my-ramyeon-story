import { useState } from 'react'
import './App.css'
import { scenes, type Choice, type Scene } from './scenes';

const InnerScene = ({scene, resultText, clickButton}: {scene: Scene, resultText: string, clickButton: (choice: Choice) => void}) => {
  return (
    <>
      <img src={`${import.meta.env.BASE_URL}/${scene.img}`} style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'contain',
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'relative'
      }}/>
      <div style = {{
        position: 'absolute',
        bottom: 0,
        margin: '0 auto',
        width: '100%',
        paddingBottom: '4px'
      }}>
      
        <p style={{
          padding: '8px',
          backgroundColor: '#aaac'
        }}>{resultText}{scene.text}</p>
        {scene.choices.map(choice => 
          <button onClick={() => clickButton(choice)}>{choice.text}</button>
        )}
      </div>
    </>
  );
}

function App() {
  const [sceneIter, setSceneIter] = useState(0);
  const [ending, setEnding] = useState('');
  const [resultStory, setResultStory] = useState('');

  const scene = (): Scene => {
    if (sceneIter < scenes.length) {
      return scenes[sceneIter];
    } else {
      return {
        text: ending ? ending : 'Mmm, yummy!',
        img: 'noodles6.jpg',
        choices: []
      }
    }
  }

  const clickButton = (choice: Choice) => {
    setSceneIter(sceneIter + 1);
    if (choice.ending) {
      setEnding(choice.ending);
    }
    if (choice.result) {
      setResultStory(choice.result);
    } else {
      setResultStory('');
    }
  }

  return <InnerScene scene={scene()} resultText={resultStory} clickButton={clickButton} />;
}

export default App
