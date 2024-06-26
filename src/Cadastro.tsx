import { VStack, Image, Text, Box, Link, Checkbox,
  ScrollView
} from "native-base";

import { TouchableOpacity } from "react-native";
import Logo1 from './assets/Logo1.png'
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { secoes } from "./utils.ts/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);


  function avancarSecao() {
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao-1)
    }
  }

  function texto(){
    if(numSecao != 2) return;
    return <Text color='blue.800' fontWeight={"bold"} fontSize={"md"} mt="2" mb={4}> Selecione o plano: </Text>
  }


  return (
    <ScrollView flex={1} p={5}>

      <Image source={Logo1} alt="Logo RailCheck"
      alignSelf='center' />

      <Titulo fontSize="xl">
        {secoes[numSecao].titulo}
      </Titulo>
    
      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label}
              placeholder={entrada.placeholder} key={entrada.id} />
            })        
        }
      </Box>

      <Box>
        {texto()}
        {
          secoes[numSecao].checkbox.map(checkbox => 
            {
              return <Checkbox key={checkbox.id}
              value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
            })        
        }
      </Box>

      {numSecao> 0 && <Botao onPress={() => voltarSecao()} 
      bgColor="gray.400">Voltar</Botao>} 

      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>


    </ScrollView>
  );
}
