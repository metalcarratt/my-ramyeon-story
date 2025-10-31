import { useState } from 'react'
import './App.css'
import { scenes, type Choice } from './scenes';

function App() {
  const [sceneIter, setSceneIter] = useState(0);
  const [ending, setEnding] = useState('');
  const [resultStory, setResultStory] = useState('');

  const scene = scenes[sceneIter];

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

  return (
    <>
      <h1>My Ramyeon Story</h1>
      { sceneIter < scenes.length
        ? (
          <>
            <p>{resultStory}{scene.text}</p>
            {scene.choices.map(choice => 
              <button onClick={() => clickButton(choice)}>{choice.text}</button>
            )}
          </>
        )
        : (
          <p>{ending ? ending : 'Mmm, yummy!'}</p>
        )
      }
    </>
  )
}

export default App
