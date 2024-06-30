import { Image, Box, Checkbox, ScrollView, useToast} from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { useState } from "react";
import { secoesOrdem } from "../utils/CadastroOrdemEntradaTexto";
import { cadastrarOrdem } from "../servicos/OrdemServico";

export default function CriarOS({navigation}) {
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
      id: 10,
      descricao: dados.descricao,
      dataCriacao: "2024-06-28T00:00:00",
      dataAlteracao: "2024-06-28T00:00:00",
      dataConclusao: "2024-06-28T00:00:00",
      prioridade: "BAIXA",
      status: "PENDENTE",
      ativoId: 1,
      usuarioCriadorId: 1,
      usuarioResponsavelId: 1
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
            secoesOrdem[0]?.entradaTexto?.map(entrada => {
                return (
                <EntradaTexto 
                    label={entrada.label}
                    placeholder={entrada.placeholder} 
                    key={entrada.id}
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
