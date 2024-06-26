import { Text, VStack} from 'native-base'
import { Botao } from './Botao'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CardProps {
    nome: string;
    descricao?: string;
    data?: string;
    ehGrave?: boolean;
}


export function Card({
    nome,
    descricao,
    data,
    ehGrave
}: CardProps){
    return(
        <VStack w="100%" bg={ehGrave ? 'red.300': 'white'} p={5} 
        borderRadius={"lg"} shadow={2} mb={5}>
            <VStack flexDir={"row"}>
                <Ionicons name={"subway-outline"} size={55} />
                <VStack pl={4}>
                    <Text fontSize={"lg"} bold >{nome}</Text>
                    <Text fontSize={"md"}>{descricao}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={0}>
                Ver detalhes
            </Botao>
        </VStack>
    )
}