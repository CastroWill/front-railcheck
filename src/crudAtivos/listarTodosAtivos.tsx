import { ScrollView, VStack } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { Card } from "../componentes/Card"

export default function ListarTodosAtivos(){
    return(
        <ScrollView bg={"white"}>
            <Titulo mb={5}>Listar todas as OS</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" p={3}>
                <Card 
                    nome="Trem 1"                    
                />
                <Card 
                    nome="Trem 2"                    
                />
                <Card 
                    nome="Trem 3"                    
                />
            </VStack>

        </ScrollView>
    )}