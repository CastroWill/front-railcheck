import { VStack, Box, ScrollView, Divider } from "native-base";
import { Botao } from "../componentes/Botao";
import { Card } from "../componentes/Card";
import { Titulo } from "../componentes/Titulo";

export default function Ativos({ navigation }){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" p={5}>
      <Titulo>Ativos</Titulo>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('ListarTodosAtivos')}>
            Listar todos os Ativos
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('BuscarAtivo')}>
            Buscar Ativo por ID
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('CriarAtivos')}>
            Criar Ativo
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('ModificarAtivos')}>
            Modificar Ativo
          </Botao>
        </Box>
      </VStack>     
    </ScrollView>
  )
}


