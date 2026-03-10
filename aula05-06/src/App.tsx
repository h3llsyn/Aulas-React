import { AnimalCard } from './components/AnimalCard'
import './styles/theme.css'

export default function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Painel de Monitoramento Selvagem 🌿</h1>

      <AnimalCard
        name="Tigre de Bengala"
        species="Panthera tigris tigris"
        isDangerous={true}
      />

      <AnimalCard
        name="Capivara"
        species="Hydrochoerus hydrochaeris"
        isDangerous={false}
      />

      <AnimalCard
        name="Arara Azul"
        species="Anodorhynchus hyacinthinus"
        isDangerous={false}
      />
    </div>
  )
}