import { ScrollView, VStack, Button, Divider } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { Card } from "../componentes/Card"

export default function ListarTodasOS(){
    return(
        <ScrollView bgColor="white">
            <Titulo>Busca OS por ID</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <EntradaTexto label="ID" placeholder="Digite o ID da OS"></EntradaTexto>
                <Botao>Buscar</Botao>
                <Divider mt={5} />
            </VStack>
            <VStack>
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    data="16/10/2023"
                    icon="build-outline"
                />
                
            </VStack>
        </ScrollView>
    )}