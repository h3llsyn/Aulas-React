import {TimerIcon} from 'lucide-react'
import styles from './styles.module.css'

export function Logo(){
    return(
        <div>
            <TimerIcon size={32} color="#fff"/>
             <span className={styles.logo}>Pomodoro</span>
        </div>

    )
}