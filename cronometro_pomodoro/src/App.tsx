import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu/>
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