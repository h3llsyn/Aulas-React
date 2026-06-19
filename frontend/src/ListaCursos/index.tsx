import { useState } from 'react';
import styles from './styles.module.css'
import { InputPadrao } from '../components/InputPadrao';
import { Container } from '../components/Container'
import { Pencil, X } from 'lucide-react'

export interface Curso {
    id: string;
    nome: string;
    periodo: string;
}

interface ListaCursosProps {
    cursos: Curso[];
    aoEditar: (curso: Curso) => void;
    aoExcluir: (id: string) => void;
}

const PERIODO_LABEL: Record<string, string> = {
    MATUTINO:   'Matutino',
    VESPERTINO: 'Vespertino',
    NOTURNO:    'Noturno',
    INTEGRAL:   'Integral',
};

export function ListaCursos({ cursos, aoEditar, aoExcluir }: ListaCursosProps) {
    const [filtro, setFiltro] = useState('');
    const cursosFiltrados = cursos.filter((curso) =>
        curso.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <Container>
            <section className={styles.listaContainer}>
                <h2 className={styles.titulo}>Lista de Cursos</h2>
                <div className={styles.buscaContainer}>
                    <InputPadrao
                        type="text"
                        placeholder="Buscar curso pelo nome"
                        value={filtro}
                        onChange={(event) => setFiltro(event.target.value)}
                    />
                </div>

                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Período</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursosFiltrados.length > 0 ? (
                            cursosFiltrados.map((curso) => (
                                <tr key={curso.id}>
                                    <td>{curso.nome}</td>
                                    <td>{PERIODO_LABEL[curso.periodo] ?? curso.periodo}</td>
                                    <td>
                                        <button
                                            className={styles.actionButton}
                                            title="Editar"
                                            onClick={() => aoEditar(curso)}
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            className={`${styles.actionButton} ${styles.btnExcluir}`}
                                            title="Excluir"
                                            onClick={() => aoExcluir(curso.id)}
                                        >
                                            <X size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>Nenhum curso encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </Container>
    );
}