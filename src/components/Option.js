import React from 'react'
import { QuizContext } from '../context/quiz'
import styles from './Option.module.css'

export const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = React.useContext(QuizContext)


    return (
        <div className={styles.options} onClick={() => selectOption()}>{option}</div>
    )
}
