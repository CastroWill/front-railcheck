import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { Card } from "../componentes/Card";
// import { depoimentos } from "../utils.ts/mocks"

export default function Ativos({ navigation }){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('CadastroAtivos')}>
            Criar Ativo
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('ListarAtivos')}>
            Listar Ativo
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('AtualizarAtivos')}>
            Atualizar Ativo
          </Botao>
          <Botao mt={3} mb={3} onPress={() => navigation.navigate('RemoverAtivos')}>
            Remover Ativo
          </Botao>
        </Box>
      </VStack>
      <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white">
        <Box w="100%" borderRadius="lg" p={3} mt={5} borderRightRadius="md"> 
          <Card 
            nome="Trem 14"
            // descricao="Falha de Freio"
          />  
        </Box>
      </VStack>      
    </ScrollView>
  )
}





{/* <VStack space={3} divider={<Divider />} w="100%">
        {
          depoimentos.map(depoimento => (
          <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
              <Text color="gray.300" fontSize="md" textAlign="justify">
              {depoimento.text}
              </Text>
              <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="5">{depoimento.titulo}</Text>
          </Box>
          ))
        }
        </VStack> */}