import { Container } from "../components/Container";
import styles from './styles.module.css'
import { InputPadrao } from "../components/InputPadrao";
import { BotaoPadrao } from "../components/BotaoPadrao";
import React, { useEffect, useState } from "react";

interface DadosCurso{
    nomecurso: string;
    periodo: string;
}
interface MainFormProps{
    aoAdicionar: (curso:any)=>void;
    aoAtualizar: (curso:any)=>void;
    cursoEmEdicao: { id: string; nome: string; periodo: string } | null;
}

export function MainForm({aoAdicionar, aoAtualizar, cursoEmEdicao}:MainFormProps){
    const [dadosCurso, setDadosCurso] = useState<DadosCurso>({nomecurso: '', periodo: ''})
    useEffect(()=>{
        if(cursoEmEdicao){
            setDadosCurso({
                nomecurso: cursoEmEdicao.nome,
                periodo: cursoEmEdicao.periodo
            });
        }else{
            setDadosCurso({
                nomecurso: '',
                periodo: '',
            });
        }
    }, [cursoEmEdicao]
);
const lidarComMudanca = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    setDadosCurso({
        ...dadosCurso,
        [e.target.name]: e.target.value
    });
}
const cadastrarCurso = (e: any)=>{
    e.preventDefault();
    if(cursoEmEdicao){
        const cursoAtualizado = {
            id:cursoEmEdicao.id,
            nome:dadosCurso.nomecurso,
            periodo:dadosCurso.periodo
        }
        console.log("Alteração em Formato JSON:\n", JSON.stringify(cursoAtualizado,null,2));
        aoAtualizar(cursoAtualizado);
    }
    else{
        const cursoNovo ={
            id: "",
            nome: dadosCurso.nomecurso,
            periodo: dadosCurso.periodo
        }
        console.log("Inclusão em Formato JSON", JSON.stringify(cursoNovo,null,2))
        aoAdicionar(cursoNovo);
    }
    setDadosCurso({
        nomecurso: '',
        periodo: ''
    })
}
    return(
        <>
            <Container>
                <section className={styles.formularioContainer}>
                    <h2 className={styles.titulo}>
                        {cursoEmEdicao ? 'Editar Curso' : 'Cadastrar Curso'}
                    </h2>
                    <form onSubmit={cadastrarCurso}>
                        <div className={styles.pularLinha}>
                            <label htmlFor="nomeCurso" className={styles.label}>Nome curso</label>
                            <InputPadrao
                                type = "text"
                                id = "nomecurso"
                                name = "nomecurso"
                                placeholder = "Ex: DS"
                                value = {dadosCurso.nomecurso}
                                onChange = {lidarComMudanca}
                                required
                            />
                        </div>
                        <div className={styles.pularLinha}>
                            <label htmlFor="periodo" className={styles.label}>Período</label>
                            <select
                                name="periodo"
                                id="periodo"
                                value = {dadosCurso.periodo}
                                onChange = {lidarComMudanca}
                                required
                                className={styles.estiloSelect}
                            >
                                <option value="">Selecione o período</option>
                                <option value="Matutino">Matutino</option>
                                <option value="Vespertino">Vespertino</option>
                                <option value="Noturno">Noturno</option>
                                <option value="Integral">Integral</option>
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