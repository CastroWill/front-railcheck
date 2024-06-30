import { OrdemServico } from "../interfaces/ordensServico"
import api from "./api"


//Mudar a rota para o endpoint das ordens de serviço
export async function buscaOrdemPorId(id: string){
    try{
        const resultado = await api.get(`/rota/${id}`)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function buscaTodasOrdens(){
    try{
        const resultado = await api.get('/rota')
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function cadastrarOrdem(ordemDeServico: OrdemServico){
    try{
        if(!ordemDeServico) return null
        const resultado = await api.post('/rota')
        console.log (resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function modificaOrdemPorId(id: string, ordemDeServico: OrdemServico){
    try{
        if(!ordemDeServico) return null
        const resultado = await api.put(`/rota/${id}`)
        console.log (resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}