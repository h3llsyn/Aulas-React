import { CardAtivo } from './components/CardAtivo'
import { Heading } from './components/Heading'
import './styles/theme.css'

export default function App() {
  return (
    <div className="container">
      <Heading>💰 Meu Portfólio 2026</Heading>

      <div className="grid">

        <CardAtivo titulo="Bitcoin (BTC) 🚀">
          <p>Preço: R$ 350.000,00</p>
          <span style={{ color: 'var(--alta)' }}>
            +5.2% hoje
          </span>
        </CardAtivo>

        <CardAtivo titulo="Fundo Imobiliário (HGLG11) 🏢">
          <p>Dividendo: R$ 1,10</p>
          <span style={{ color: 'var(--alta)' }}>
            Rendimento estável
          </span>
        </CardAtivo>

        <CardAtivo titulo="Empresa X (VALE3) 📉">
          <p>Preço: R$ 65,20</p>
          <span style={{ color: 'var(--baixa)' }}>
            -1.8% hoje
          </span>
        </CardAtivo>

      </div>
    </div>
  )
}