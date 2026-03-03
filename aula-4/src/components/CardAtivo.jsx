import styles from './CardAtivo.module.css'

export function CardAtivo({ titulo, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.conteudo}>
        {children}
      </div>
    </div>
  )
}