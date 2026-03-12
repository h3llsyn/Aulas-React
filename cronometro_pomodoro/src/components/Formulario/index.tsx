import styles from './styles.module.css'

export function Formulario() {
    return (
        <form className='formulario' action="">
            <div>
                <label htmlFor="task">task</label>
                <input type="text" id="meuInput" />
            </div>
            <div className={styles.formularioHr}>
                <hr  />
            </div>
            <div>
                <p>Ciclos</p>
            </div>
            <button>Enviar</button>
        </form>
    );
}