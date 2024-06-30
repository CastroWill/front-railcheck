import { ScrollView, VStack, Divider } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { Card } from "../componentes/Card"
import { useState } from "react"
import { buscaOrdemPorId } from "../servicos/OrdemServico"
import { OrdemServico } from "../interfaces/ordensServico"


export default function BuscarOS_ID(){
    const [idBusca, setIdBusca] = useState ('')
    const [resultadoBusca, setResultadoBusca] = useState({} as OrdemServico)

    async function buscar(){
        if(!idBusca) return null
        const resultado = await buscaOrdemPorId (idBusca)
        if(resultado){
            setResultadoBusca(resultado);
            console.log(resultadoBusca);
        }
    }
    
    return(
        <ScrollView bgColor="white">
            <Titulo>Busca OS por ID</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <EntradaTexto 
                    label="ID" 
                    placeholder="Digite o ID da OS"
                    value={idBusca}
                    onChangeText={setIdBusca}
                />
                <Botao onPress={buscar}>Buscar</Botao>
                <Divider mt={5} />
            </VStack>
            <Card 
                nome={resultadoBusca.nome}
                descricao={resultadoBusca.descricao}
                data={resultadoBusca.data}
            />
        </ScrollView>       
    )}



      
      