import { ScrollView, VStack, Divider } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { Card } from "../componentes/Card"
import { useState } from "react"
import { buscaAtivosPorId } from "../servicos/AtivosServico"
import { Ativos } from "../interfaces/ativos"


export default function BuscarAtivos_ID(){
    const [idBusca, setIdBusca] = useState ('')
    const [resultadoBusca, setResultadoBusca] = useState({} as Ativos)

    async function buscar(){
        if(!idBusca) return null
        const resultado = await buscaAtivosPorId (idBusca)
        if(resultado){
            setResultadoBusca(resultado);
            console.log(resultadoBusca);
        }
    }
    
    return(
        <ScrollView bgColor="white">
            <Titulo>Busca Ativo por ID</Titulo>
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
                descricao={resultadoBusca.descricao}
                data={resultadoBusca.dataCriacao}
            />
        </ScrollView>       
    )}