import { useState } from 'react';
import styles from './styles.module.css';

export function DefaultInput({
  senha = false
}) {
             const [input, setInput] = useState()

             handleChange = () =>{
                
             }

  return (
    <input
      className={styles.input}

      type={senha ? 'password' : 'text'}
      placeholder={senha ? "Digite sua senha" : "Digite seu nickname"}
    onChange={handleChange}
    />
  );
}




export default DefaultInput;