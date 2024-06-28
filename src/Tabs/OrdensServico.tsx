import { VStack, Box, ScrollView, Divider } from "native-base";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/Titulo";
import { Card } from "../componentes/Card";

export default function Ativos({ navigation }){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Titulo>Ordens de Serviço</Titulo>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('ListarTodasOS')}>
            Listar todas as OS
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('BuscarOS')}>
            Buscar OS por ID
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('CriarOS')}>
            Criar OS
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('ModificarOS')}>
            Modificar OS
          </Botao>
        </Box>
      </VStack> 
      <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white">
        </VStack>     
    </ScrollView>
  )
}