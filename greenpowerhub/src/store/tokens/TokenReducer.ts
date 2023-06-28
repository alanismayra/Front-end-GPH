import { Action} from "./Action"

export interface TokenState{ 
    tokens: string
}

const initialState = {
    tokens: "" //token inicial é vazio
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){ //verifica o tipo da action
        case "ADD_TOKEN": {
            return {tokens: action.payload} // recebe o token que usa p se autenticar
        }

        default:
            return state // se nao retorna o estado vazio como já estava
    }

}