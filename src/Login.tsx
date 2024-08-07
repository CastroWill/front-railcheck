import { VStack, Image, Text, Box, Link, useToast
} from "native-base";

import { TouchableOpacity } from "react-native";
import Logo1 from './assets/Logo1.png'
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useEffect, useState } from "react";
import { fazerLogin } from "./servicos/AutenticacaoServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    AsyncStorage.removeItem('token')
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])

  async function login(){
    const resultado = await fazerLogin(email,senha)
    if(resultado){
      const {token} = resultado
      AsyncStorage.setItem('token', token)
      
      const tokenDecodificado = jwtDecode(token) as any 
      const usuarioId = tokenDecodificado.id
      AsyncStorage.setItem('usuarioId', usuarioId)
      navigation.replace('Tabs')
    } 
    else
    {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha estão incorretos",
        background: "red.500"
      })
    }
  }

  if(carregando){
    return null
  }

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
          value={email}
          onChangeText={setEmail}
        >
        </EntradaTexto>

        <EntradaTexto 
          label = "Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        >
        </EntradaTexto>

      </Box>

      <Botao onPress={login}>Entrar</Botao>

      <Link 
        href='https://www.google.com.br' mt={2}
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
