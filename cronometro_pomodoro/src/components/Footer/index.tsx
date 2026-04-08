import style from './styles.module.css'
import {Copyright} from 'lucide-react'

export function Footer(){
    return(
        <>
            <footer className={style.footer}>
                <a href="">Entenda como funciona a técnica pomodoro</a>
                <a href="">Cronometro Pomodoro<Copyright/>{new
                Date().getFullYear()} - Feito por Lavíz</a>
            </footer>
        </>
    )
}