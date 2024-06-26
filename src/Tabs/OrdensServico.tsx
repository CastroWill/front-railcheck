import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";

export default function Ativos({ navigation }){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('CadastroAtivos')}>
            Criar OS
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('ListarAtivos')}>
            Listar OS
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('AtualizarAtivos')}>
            Atualizar OS
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('RemoverAtivos')}>
            Remover OS
          </Botao>
        </Box>
      </VStack>      
    </ScrollView>
  )
}