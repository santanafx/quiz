import React from 'react'
import { QuizContext } from '../context/quiz'
import styles from './GameOver.module.css'

export const GameOver = () => {
    const [quizState, dispatch] = React.useContext(QuizContext)

    return (
        <div className={styles.gameOverContainer}>
            <h2>Fim do jogo</h2>
            <h4>Pontuação: {quizState.score}</h4>
            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
        </div>
    )
}
