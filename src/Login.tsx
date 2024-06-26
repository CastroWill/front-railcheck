import { VStack, Image, Text, Box, FormControl, Input,
  Button, Link
} from "native-base";

import { TouchableOpacity } from "react-native";
import Logo1 from './assets/Logo1.png'
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center"
    justifyContent="center" p={5}>

      <Image source={Logo1} alt="Logo Voll" />

      <Titulo fontSize="xl">
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaTexto 
          label = "Email"
          placeholder="Insira seu endereço de email"
        >
        </EntradaTexto>

        <EntradaTexto 
          label = "Senha"
          placeholder="Insira sua senha"
        >
        </EntradaTexto>

      </Box>

      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link 
        href='https://www.alura.com.br' mt={2}
      >
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" 
      justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
