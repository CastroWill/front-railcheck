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
        <Divider mt={5} alignSelf={"center"}/>
      </VStack>
      
      <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white">
        <Box w="100%" borderRadius="lg" p={3} borderRightRadius="md"> 
          <Card 
            nome="Trem 14"
            // descricao="Falha de Freio"
          />  
          
        </Box>
      </VStack>      
    </ScrollView>
  )
}


