import styles from './styles.module.css';

export function Button(){
    return(
        <>
        <div className={styles.button}>
            <button>Enviar</button>
        </div>
        </>
    )
}