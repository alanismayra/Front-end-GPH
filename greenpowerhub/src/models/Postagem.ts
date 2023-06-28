import Tema from './Tema'

interface Postagem {
    id: number;
    titulo: string;
    postagem:string;
    data: string;
    comentario: string
    tema?: Tema| null
}

export default Postagem;