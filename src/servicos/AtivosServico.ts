import { Ativos } from "../interfaces/ativos"
import api from "./api"


//Mudar a rota para o endpoint das ordens de serviço
export async function buscaAtivosPorId(id: string){
    try{
        const resultado = await api.get(`/os-service/os/${id}/`)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function buscaTodosAtivos(){
    try{
        const resultado = await api.get('/os-service/os')
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function cadastrarAtivo(ativo: Ativos){
    console.log(ativo)
    try{
        if(!ativo) return null
        const resultado = await api.post('/os-service/os', ativo)
        console.log (resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function modificaAtivoPorId(ativo: Ativos){
    console.log('entrou')
    try{
        if(!ativo) return null
        console.log(ativo)
        const resultado = await api.put('/os-service/os', ativo)
        console.log (resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}