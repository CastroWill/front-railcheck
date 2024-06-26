import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo color={"blue.500"}>Meu perfil</Titulo>
                <Avatar size={"xl"} source = {{uri: "https://github.com/lobregate.png"}} mt={5} />

                <Titulo color={"blue.500"}>Informações pessoais</Titulo>
                <Titulo fontSize={"lg"} mb={1}>André</Titulo>
                <Text>11/11/1111</Text>
                <Text>São Paulo-SP</Text>
                <Text>Técnico de manutenção</Text>
                <Divider mt={5}/>

                {/* <Titulo color={"blue.500"} mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text> */}
            </VStack>
        </ScrollView>
    )
}