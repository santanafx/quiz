import React from 'react'
import styles from './Button.module.css'
import { QuizContext } from '../context/quiz'

export const Button = ({ label }) => {

    const [quizState, dispatch] = React.useContext(QuizContext)

    return (
        <>
            <button className={styles.botao} onClick={() => { dispatch({ type: 'CHANGE_STAGE' }) }} >{label}</button>
        </>
    )
}
