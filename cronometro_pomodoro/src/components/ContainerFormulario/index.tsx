import styles from './styles.module.css'

export function ContainerFormulario() {
    return (
        <form className='formulario' action="">
            <div>
                <label htmlFor="task">task</label>
                <input type="text" id="meuInput" />
            </div>
            <div>
                linha verde
            </div>
            <div>
                <p>Ciclos</p>
            </div>
            <button>Enviar</button>
        </form>
    );
}