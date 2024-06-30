import { ScrollView, VStack } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { Card } from "../componentes/Card"
import { useEffect, useState } from "react"
import { buscaTodosAtivos } from "../servicos/AtivosServico"
import { Ativos } from "../interfaces/ativos"

export default function ListarTodosAtivos(){
    const [resultadoBusca, setResultadoBusca] = useState([])

    useEffect(() => {
        async function buscar(){
            const resultado = await buscaTodosAtivos()
            console.log(resultado)
            if(resultado){
                setResultadoBusca(resultado)
            }
        }
        buscar();
    }, [])
    

    return(
        <ScrollView bg={"white"}>
            <Titulo mb={5}>Listar todos os Ativos</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" p={3}>
            {resultadoBusca?.map((ativos: Ativos, index) => (
                <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
                    <Card 
                        descricao={ativos.descricao}
                        status={ativos.status}
                        data={ativos.dataCriacao}
                    />
                </VStack>
            ))}
            </VStack>

        </ScrollView>
    )}