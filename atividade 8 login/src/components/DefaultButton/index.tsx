import styles from './styles.module.css';

type DefaultButtonProps = {
    funcao?: () => void;
}


export function DefaultButton({funcao}: DefaultButtonProps  ) {
    return (
        <button className={styles.defaultButton} onClick={funcao}>
            Enviar
        </button>
    );
}

export default DefaultButton;