import React from 'react'
import styles from './Question.module.css'
import { QuizContext } from '../context/quiz'
import { Option } from './Option'

export const Question = () => {

    const [quizState, dispatch] = React.useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    // console.log(quizState)
    console.log(currentQuestion)

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option }
        })
    }

    return (
        <div className={styles.containerQuestion}>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div className={styles.containerOption}>
                <p>{currentQuestion.options.map((option) => (
                    <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} />
                ))}</p>
            </div>
            {quizState.answerSelected && (<button className={styles.button} onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}> Passar </button>)}
        </div>
    )
}
