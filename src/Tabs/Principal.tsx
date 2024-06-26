import { VStack, Text, ScrollView, Image } from "native-base"
import Logo1 from "../assets/Logo1.png"
import { Titulo } from "../componentes/Titulo"
import { Card } from "../componentes/Card";


export default function Principal(){
    return(
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo1} alt="Logo rail-check" alignSelf={"center"} mt={5} mb={5}/>

                <Titulo color="blue.800" alignSelf="center" mb={5}>Últimas falhas</Titulo>
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
                        <Card 
                            descricao="Falha de Freio"
                            nome="Trem 14"
                        />
                </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}