import { ScrollView, VStack } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { Card } from "../componentes/Card"
import { useEffect, useState } from "react"
import { buscaTodasOrdens } from "../servicos/OrdemServico"
import { OrdemServico } from "../interfaces/ordensServico"

export default function ListarTodasOS(){
    const [resultadoBusca, setResultadoBusca] = useState([])

    useEffect(() => {
        async function buscar(){
            const resultado = await buscaTodasOrdens()
            console.log(resultado)
            if(resultado){
                setResultadoBusca(resultado)
            }
        }
        buscar();
    }, [])
    

    return(
        <ScrollView bg={"white"}>
            <Titulo mb={5}>Listar todas as OS</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" p={3}>
            {resultadoBusca?.map((ordensServico: OrdemServico, index) => (
                <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
                    <Card 
                        descricao={ordensServico.descricao}
                        status={ordensServico.status}
                        data={ordensServico.dataCriacao}
                    />
                </VStack>
            ))}
            </VStack>

        </ScrollView>
    )}