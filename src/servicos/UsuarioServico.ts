import api from "./api";
import { Usuario } from "../interfaces/usuario";

export async function cadastrarUsuario(usuario: Usuario){
    if(!usuario) return null;
    try{
        const resultado = await api.post('/paciente', usuario)
        console.log (resultado.data)
        return resultado.data
    }
    catch(erro){
        console.log(erro);
        return null;
    }
}