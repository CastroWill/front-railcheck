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


//Mudar a rota para o endpoint das ordens de serviço
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