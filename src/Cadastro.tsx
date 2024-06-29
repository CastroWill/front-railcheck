import { Image, Box, Checkbox, ScrollView, useToast} from "native-base";
import Logo1 from './assets/Logo1.png'
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { secoes } from "./utils.ts/CadastroEntradaTexto";
import { cadastrarUsuario } from "./servicos/UsuarioServico";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any)
  const toast = useToast() 

  function avancarSecao() {
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
    else{
      console.log(dados)
      //cadastrar()
    }
  }

  function voltarSecao() {
    if(numSecao > 0){
      setNumSecao(numSecao-1)
    }
  }

  function atualizarDados(id: string, valor: string){
    setDados({...dados, [id]: valor})
  }

  async function cadastrar() {
    const resultado = await cadastrarUsuario({
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha
    })
    if (resultado) {
      toast.show({
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer login',
        backgroundColor: 'green.500',
      })
    }
    else {
      toast.show({
        title: 'Erro ao cadastrar',
        description: 'Verifique os dados e tente novamente',
        backgroundColor: 'red.500',
      })
    }
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
            return (
              <EntradaTexto 
                label={entrada.label}
                placeholder={entrada.placeholder} 
                key={entrada.id}
                secureTextEntry={entrada.secureTextEntry}
                value={dados[entrada.name]}
                onChangeText={(text => atualizarDados(entrada.name, text))}
              />)
            })    
        }
      </Box>

      {numSecao> 0 && <Botao onPress={() => voltarSecao()} 
      bgColor="gray.400">Voltar</Botao>} 

      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Cadastrar</Botao>


    </ScrollView>
  );
}
