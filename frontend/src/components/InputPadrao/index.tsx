import type { InputHTMLAttributes } from "react";
import styles from './styles.module.css'
interface InputPadraoProps extends InputHTMLAttributes<HTMLInputElement> {

}


export function InputPadrao({className, ...rest}:InputPadraoProps){
  return (
  <input className={`${styles.input} ${className || ''}`} {...rest} />
);
}