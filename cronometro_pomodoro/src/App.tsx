import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Formulario } from './components/Formulario'
import { Cycles } from './components/Cycles'
import { Button } from './components/Button'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div>
            <label htmlFor="task">task</label>
            <input type="text" id="meuInput" placeholder='Digite algo...' />
          </div>
          <div className="formRow">
            <Formulario labelText='task' id='meuInput' type='text' placeholder='Digite algo...'/>
          </div>
          <div className='formRow'>
            linha verde
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <Button/>
          </div>
        </form>
      </Container>

      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}