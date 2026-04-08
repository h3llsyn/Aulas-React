import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { MainForm } from "./components/MainForm";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from "./components/DefaultButton";

import { Mail, Lock } from "lucide-react";

export function App() {
  return (
    <Container>
      <MainForm>
        <h2 style={{ color: "var(--text-main)", textAlign: "center" }}>
          Login
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <DefaultInput
            type="email"
            placeholder="Email"
            icon={<Mail size={20} />}
          />

          <DefaultInput
            type="password"
            placeholder="Senha"
            icon={<Lock size={20} />}
          />

          <DefaultButton type="submit">
            Entrar
          </DefaultButton>
        </form>
      </MainForm>
    </Container>
  );
}