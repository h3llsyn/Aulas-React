import styles from './AnimalCard.module.css'

type AnimalCardProps = {
  name: string
  species: string
  isDangerous: boolean
}

export function AnimalCard({ name, species, isDangerous }: AnimalCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.species}>{species}</p>

      {isDangerous ? (
        <p className={styles.danger}>
          Status: Alerta Máximo 🐅
        </p>
      ) : (
        <p className={styles.safe}>
          Status: Tranquilo e Amigável 🦦
        </p>
      )}
    </div>
  )
}