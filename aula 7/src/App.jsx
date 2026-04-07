import { Container } from "./components/Container";
import { MainForm } from "./components/MainForm";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from "./components/DefaultButton";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <Container>
      <MainForm>
        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          <h2>Login</h2>

          <DefaultInput
            type="email"
            placeholder="Digite seu email"
            icon="mail"
          />

          <DefaultInput
            type="password"
            placeholder="Digite sua senha"
            icon="lock"
          />

          <DefaultButton text="Entrar" />

        </form>
      </MainForm>
    </Container>
  );
}

export default App;