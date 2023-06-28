export type Action ={type: "ADD_TOKEN"; payload:string}; //action possui duas propriedades: o tipo e a informação

export const addToken = (token: string): Action => ({
    type:"ADD_TOKEN",
    payload: token,
});