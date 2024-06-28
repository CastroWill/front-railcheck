import { ScrollView, VStack, Divider } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { Card } from "../componentes/Card"

export default function BuscarAtivo_ID(){
    return(
        <ScrollView bgColor="white">
            <Titulo>Busca OS por ID</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <EntradaTexto label="ID" placeholder="Digite o ID do ativo"></EntradaTexto>
                <Botao>Buscar</Botao>
                <Divider mt={5} />
            </VStack>
            <VStack>
                <Card 
                    nome="Trem 1"
                />
            </VStack>
        </ScrollView>
    )}