import { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import { MainForm } from '../../MainForm';
import { ListaCursos, type Curso } from '../../ListaCursos/';

// A VITE_API_URL agora aponta para "/api" que o Vite (local) e a Vercel (prod) vão redirecionar sem CORS.
const apiUrl = import.meta.env.VITE_API_URL || '/api';

export function Home() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [cursoEmEdicao, setCursoEmEdicao] = useState<Curso | null>(null);

  const carregarCursos = async () => {
    try {
      const res = await fetch(`${apiUrl}/cursos`);
      if (res.ok) {
        const data = await res.json();
        // Caso a API retorne páginas ou um array dentro de content
        const lista = Array.isArray(data) ? data : (data.content || []);
        
        // Se a API não retornar o ID (problema no backend), usamos o index temporariamente para o React não quebrar.
        const listaComIds = lista.map((item: any, index: number) => ({
          ...item,
          id: item.id || String(index + 1)
        }));
        
        setCursos(listaComIds);
      }
    } catch (err) {
      console.error("Erro ao carregar cursos:", err);
    }
  };

  useEffect(() => {
    carregarCursos();
  }, []);

  const adicionarCurso = async (novoCurso: Curso) => {
    try {
      const res = await fetch(`${apiUrl}/cursos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nome: novoCurso.nome.toUpperCase(), 
          periodo: novoCurso.periodo.toUpperCase() 
        })
      });
      if (res.ok) {
        carregarCursos();
      } else {
        console.error("Erro na API ao criar curso");
      }
    } catch (err) {
      console.error("Erro ao adicionar curso:", err);
    }
  };

  const excluirCurso = async (id: string) => {
    try {
      const res = await fetch(`${apiUrl}/cursos/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        carregarCursos();
      }
    } catch (err) {
      console.error("Erro ao excluir curso:", err);
    }
  };

  const editarCurso = (curso: Curso) => {
    setCursoEmEdicao(curso);
  };

  const atualizarCurso = async (cursoAtualizado: Curso) => {
    try {
      const res = await fetch(`${apiUrl}/cursos`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: Number(cursoAtualizado.id),
          nome: cursoAtualizado.nome.toUpperCase(),
          periodo: cursoAtualizado.periodo.toUpperCase()
        })
      });
      if (res.ok) {
        carregarCursos();
        setCursoEmEdicao(null);
      }
    } catch (err) {
      console.error("Erro ao atualizar curso:", err);
    }
  };

  return (
    <Container>
      <MainForm 
        aoAdicionar={adicionarCurso} 
        aoAtualizar={atualizarCurso}
        cursoEmEdicao={cursoEmEdicao}
      />
      <ListaCursos 
        cursos={cursos} 
        aoEditar={editarCurso} 
        aoExcluir={excluirCurso} 
      />
    </Container>
  );
}