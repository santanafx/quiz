import React from 'react'
import quiz from '../img/quiz.png'
import styles from './Welcome.module.css'
import { Button } from './Button'

export const Welcome = () => {


    return (
        <div className={styles.welcome}>
            <h1>Quiz da programacão</h1>
            <h2>Seja bem-vindo</h2>
            <img src={quiz} alt="Imagem quiz" />
            <h4>Clique no botão para iniciar</h4>
            <Button label='Iniciar' />
        </div>
    )
}
