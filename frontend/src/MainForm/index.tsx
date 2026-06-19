import { Container } from "../components/Container";
import styles from './styles.module.css'
import { InputPadrao } from "../components/InputPadrao";
import { BotaoPadrao } from "../components/BotaoPadrao";
import React, { useEffect, useState } from "react";

interface DadosCurso {
    nomecurso: string;
    periodo: string;
}

interface MainFormProps {
    aoAdicionar: (curso: any) => void;
    aoAtualizar: (curso: any) => void;
    cursoEmEdicao: { id: string; nome: string; periodo: string } | null;
}

const PERIODOS: { valor: string; label: string }[] = [
    { valor: 'MATUTINO',   label: 'Matutino'   },
    { valor: 'VESPERTINO', label: 'Vespertino' },
    { valor: 'NOTURNO',    label: 'Noturno'    },
    { valor: 'INTEGRAL',   label: 'Integral'   },
];

export function MainForm({ aoAdicionar, aoAtualizar, cursoEmEdicao }: MainFormProps) {
    const [dadosCurso, setDadosCurso] = useState<DadosCurso>({ nomecurso: '', periodo: '' });

    useEffect(() => {
        if (cursoEmEdicao) {
            setDadosCurso({
                nomecurso: cursoEmEdicao.nome,
                periodo: cursoEmEdicao.periodo,
            });
        } else {
            setDadosCurso({ nomecurso: '', periodo: '' });
        }
    }, [cursoEmEdicao]);

    const lidarComMudanca = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setDadosCurso({
            ...dadosCurso,
            [e.target.name]: e.target.value,
        });
    };

    const cadastrarCurso = (e: any) => {
        e.preventDefault();
        if (cursoEmEdicao) {
            aoAtualizar({
                id: cursoEmEdicao.id,
                nome: dadosCurso.nomecurso,
                periodo: dadosCurso.periodo,
            });
        } else {
            aoAdicionar({
                nome: dadosCurso.nomecurso,
                periodo: dadosCurso.periodo,
            });
        }
        setDadosCurso({ nomecurso: '', periodo: '' });
    };

    return (
        <>
            <Container>
                <section className={styles.formularioContainer}>
                    <h2 className={styles.titulo}>
                        {cursoEmEdicao ? 'Editar Curso' : 'Cadastrar Curso'}
                    </h2>
                    <form onSubmit={cadastrarCurso}>
                        <div className={styles.pularLinha}>
                            <label htmlFor="nomecurso" className={styles.label}>Nome do curso</label>
                            <InputPadrao
                                type="text"
                                id="nomecurso"
                                name="nomecurso"
                                placeholder="Ex: Desenvolvimento de Sistemas"
                                value={dadosCurso.nomecurso}
                                onChange={lidarComMudanca}
                                required
                            />
                        </div>
                        <div className={styles.pularLinha}>
                            <label htmlFor="periodo" className={styles.label}>Período</label>
                            <select
                                name="periodo"
                                id="periodo"
                                value={dadosCurso.periodo}
                                onChange={lidarComMudanca}
                                required
                                className={styles.estiloSelect}
                            >
                                <option value="">Selecione o período</option>
                                {PERIODOS.map((p) => (
                                    <option key={p.valor} value={p.valor}>
                                        {p.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.alinharBotao}>
                            <BotaoPadrao type="submit">
                                {cursoEmEdicao ? 'Salvar Alteração' : 'Inserir Curso'}
                            </BotaoPadrao>
                        </div>
                    </form>
                </section>
            </Container>
        </>
    );
}