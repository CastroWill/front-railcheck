import { Image, Box, Checkbox, ScrollView, useToast} from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { useState } from "react";
import { secoes } from "../utils/CadastroUsuarioEntradaTexto";
import { cadastrarOrdem } from "../servicos/OrdemServico";

export default function Cadastro({navigation}) {
  const [numSecao, setNumSecao] = useState(0);
  const [dados, setDados] = useState({} as any)
  const toast = useToast() 

  function finalizarCadastro(){
    cadastrar()
    navigation.navigate('Tabs')
  }

  function atualizarDados(id: string, valor: string){
    setDados({...dados, [id]: valor})
  }

  async function cadastrar() {
    const resultado = await cadastrarOrdem({
      nome: dados.nome,
      data: dados.data,
      status: dados.status,
      descricao: dados.descricao
    })
    if (resultado) {
      toast.show({
        title: 'Ordem criada com sucesso',
        backgroundColor: 'green.500',
      })
    }
    else {
      toast.show({
        title: 'Erro ao criar a ordem',
        description: 'Verifique os dados e tente novamente',
        backgroundColor: 'red.500',
      })
    }
  }

  return (
    <ScrollView flex={1} p={5}>  
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

        <Botao onPress={() => finalizarCadastro()}>Cadastrar</Botao>
        <Botao onPress={() => navigation.navigate('Tabs')} mt={4}>Cancelar</Botao>

    </ScrollView>
  );
}
