import { Text, VStack} from 'native-base'
import { Botao } from './Botao'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CardProps {
    nome: string;
    descricao?: string;
    data?: string;
    ehGrave?: boolean;
    icon?: string;
}


export function Card({
    nome,
    descricao,
    data,
    ehGrave,
    icon = "subway-outline"
}: CardProps){
    if(!nome) return null;
    return(
        <VStack w="100%" bg={ehGrave ? 'red.300': 'gray.100'} p={5} 
        borderRadius={"lg"} shadow={5} mb={5}>
            <VStack flexDir={"row"}>
                <Ionicons name={icon} size={55} />
                <VStack pl={4}>
                    <Text fontSize={"lg"} bold >{nome}</Text>
                    <Text fontSize={"md"}>{descricao}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={1}>
                Ver detalhes
            </Botao>
        </VStack>
    )
}