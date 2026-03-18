import type React from 'react';
import styles from './styles.module.css'
type FormularioProps = {
    id: string;
    labelText: string;
} & React.Component<'input'>;

export function Formulario({
    id,
    type,
    labelText = "task",
    ...rest
}: FormularioProps) {
    return (
        <>
            <label htmlFor="{id}">{labelText}</label>
            <input className={styles.input} type="{type}" id="{id}" {...rest} />
        </>
    );
}