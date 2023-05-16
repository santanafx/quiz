import React from 'react'
import './App.css';
import { QuizContext } from './context/quiz';
import { Welcome } from './components/Welcome';
import { Question } from './components/Question';
import { GameOver } from './components/GameOver';

function App() {

  const [quizState, dispatch] = React.useContext(QuizContext)

  return (
    <>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}

    </>
  );
}

export default App;
