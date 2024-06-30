import { OrdemServico } from "../interfaces/ordensServico"
import api from "./api"


//Mudar a rota para o endpoint das ordens de serviço
export async function buscaOrdemPorId(id: string){
    try{
        const resultado = await api.get(`/os-service/os/${id}/`)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function buscaTodasOrdens(){
    try{
        const resultado = await api.get('/os-service/os')
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function cadastrarOrdem(ordemDeServico: OrdemServico){
    console.log(ordemDeServico)
    try{
        if(!ordemDeServico) return null
        const resultado = await api.post('/os-service/os', ordemDeServico)
        console.log (resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}

export async function modificaOrdemPorId(id: string, ordemDeServico: OrdemServico){
    console.log('entrou')
    try{
        if(!ordemDeServico) return null
        console.log(ordemDeServico)
        const resultado = await api.put('/os-service/os', ordemDeServico)
        console.log (resultado.data)
        return resultado.data
    }
    catch(error){
        console.log(error)
        return null
    }
}