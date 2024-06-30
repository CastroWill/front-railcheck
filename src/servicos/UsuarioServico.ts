import api from "./api";
import { Usuario } from "../interfaces/usuario";

export async function cadastrarUsuario(usuario: Usuario){
    if(!usuario) return null;
    try{
        const resultado = await api.post('/user-service/user', usuario)
        console.log (resultado.data)
        return resultado.data
    }
    catch(erro){
        console.log(erro);
        return null;
    }
}

export async function pegarDadosUsuario(id: string){
    try{
        const resultado = await api.get(`/rota/${id}`)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}