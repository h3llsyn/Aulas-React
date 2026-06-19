import { Container } from "../../components/Container";
import { ListaCursos, type Curso } from "../../ListaCursos"
import { MainForm } from "../../MainForm";
import { useState, useEffect } from "react";

const API_URL = 'http://localhost:8080/cursos';

export function Home(){
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [cursoEmEdicao, setCursoEmEdicao] = useState<Curso | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    const buscarCursos = async () => {
        try {
            setCarregando(true);
            setErro(null);
            const resposta = await fetch(API_URL);
            if (!resposta.ok) throw new Error('Erro ao buscar cursos');
            const dados = await resposta.json();
            setCursos(dados);
        } catch (e) {
            setErro('Não foi possível conectar com o servidor.');
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        buscarCursos();
    }, []);

    const adicionarCurso = async (novoCurso: Omit<Curso, 'id'>) => {
        try {
            const resposta = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: novoCurso.nome, periodo: novoCurso.periodo }),
            });
            if (!resposta.ok) {
                const msg = await resposta.text();
                throw new Error(msg || 'Erro ao cadastrar curso');
            }
            await buscarCursos();
        } catch (e: any) {
            alert(e.message || 'Erro ao cadastrar curso.');
        }
    };

    const excluirCurso = async (id: string) => {
        try {
            const resposta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!resposta.ok) throw new Error('Erro ao excluir curso');
            await buscarCursos();
        } catch (e) {
            alert('Erro ao excluir curso.');
        }
    };

    const atualizarCurso = async (cursoAtualizado: Curso) => {
        try {
            const resposta = await fetch(API_URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: cursoAtualizado.id,
                    nome: cursoAtualizado.nome,
                    periodo: cursoAtualizado.periodo,
                }),
            });
            if (!resposta.ok) throw new Error('Erro ao atualizar curso');
            setCursoEmEdicao(null);
            await buscarCursos();
        } catch (e) {
            alert('Erro ao atualizar curso.');
        }
    };

    const editarCurso = (curso: Curso) => {
        setCursoEmEdicao(curso);
    };

    return (
        <>
            <Container>
                <MainForm
                    aoAdicionar={adicionarCurso}
                    aoAtualizar={atualizarCurso}
                    cursoEmEdicao={cursoEmEdicao}
                />

                {carregando && <p style={{ textAlign: 'center', color: '#5c5c5c' }}>Carregando...</p>}
                {erro && <p style={{ textAlign: 'center', color: '#ce0000' }}>{erro}</p>}

                {!carregando && !erro && (
                    <ListaCursos
                        cursos={cursos}
                        aoEditar={editarCurso}
                        aoExcluir={excluirCurso}
                    />
                )}
            </Container>
        </>
    );
}