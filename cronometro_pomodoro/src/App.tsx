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
import {CirclePlay} from 'lucide-react'
import {CircleStop} from 'lucide-react'
import {Footer} from './components/Footer'

export function App() {
  return (
    <>
      <Heading>
        Número: <span id='numero'>0</span>
      </Heading>
      
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
            <Button icon={<CirclePlay/>} color='green'/>
            <Button icon={<CircleStop/>} color='red'/>
          </div>
        </form>
      </Container>

      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  )
}