import { ScrollView, VStack, Button, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { Card } from "../componentes/Card"

export default function ListarTodasOS(){
    return(
        <ScrollView bg={"white"}>
            <Titulo mb={5}>Listar todas as OS</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" p={3}>
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    icon="build-outline"
                />
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    icon="build-outline"
                />
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    icon="build-outline"
                />
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    icon="build-outline"
                />
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    icon="build-outline"
                />
                <Card 
                    nome="OS N° 100"
                    descricao="Falha de Ar Condicionado"
                    icon="build-outline"
                />
            </VStack>

        </ScrollView>
    )}