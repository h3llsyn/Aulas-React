// Importa os dados mocados diretamente do JSON
import cursosData from './cursosMock.json';

// Define a estrutura (tipagem) do que é um Curso
export interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  instrutor: string;
  ativo: boolean;
}

// Simulamos um pequeno atraso de rede (ex: 800 milissegundos) para parecer uma chamada real à API
const DELAY_DE_REDE = 800;

// Objeto que conterá as chamadas da nossa "API" simulada
export const apiService = {
  
  // Função assíncrona que busca os cursos
  getCursos: async (): Promise<Curso[]> => {
    // Retorna uma Promessa (Promise), que é como o JavaScript lida com dados que demoram a chegar
    return new Promise((resolve) => {
      // O setTimeout espera o tempo definido em DELAY_DE_REDE antes de executar o código de dentro
      setTimeout(() => {
        // O "resolve" devolve os dados do JSON com sucesso, avisando que a promessa terminou
        resolve(cursosData as Curso[]);
      }, DELAY_DE_REDE);
    });
  },

  // Aqui você pode criar outras funções depois (ex: salvarCurso, deletarCurso) 
  // que apenas manipulam o array ou simulam a resposta.
};
