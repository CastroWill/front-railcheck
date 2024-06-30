import { ScrollView, VStack, Divider, useToast } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { useState } from "react"
import { buscaOrdemPorId, modificaOrdemPorId } from "../servicos/OrdemServico"
import { OrdemServico } from "../interfaces/ordensServico"


export default function ModificarOS({navigation}){
    const [idBusca, setIdBusca] = useState ('')
    const [resultadoBusca, setResultadoBusca] = useState({} as OrdemServico)
    const [data, setData] = useState('')
    const [status, setStatus] = useState('')
    const [descricao, setDescricao] = useState('')
    const toast = useToast() 

    async function buscar(){
        if(!idBusca) return null
        const resultado = await buscaOrdemPorId (idBusca)
        if(resultado){
            setResultadoBusca(resultado);
            console.log(resultadoBusca);
        }
    }
    
    async function modificar() {
        const resultado = await modificaOrdemPorId(idBusca, {
          id: parseInt(idBusca),
          descricao: descricao,
          dataCriacao: "2024-06-28T00:00:00",
          dataAlteracao: "2024-06-28T00:00:00",
          dataConclusao: "2024-06-28T00:00:00",
          prioridade: "BAIXA",
          status: status,
          ativoId: 1,
          usuarioCriadorId: 1,
          usuarioResponsavelId: 1
        })
        if (resultado) {
          toast.show({
            title: 'Ordem alterada com sucesso',
            backgroundColor: 'green.500',
          })
          navigation.navigate('Tabs')
        }
        else {
          toast.show({
            title: 'Erro ao criar a ordem',
            description: 'Verifique os dados e tente novamente',
            backgroundColor: 'red.500',
          })
        }
      }

    return(
        <ScrollView bgColor="white">
            <Titulo>Busca OS por ID</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
              <EntradaTexto 
                  label="ID" 
                  placeholder="Digite o ID da OS"
                  value={idBusca}
                  onChangeText={setIdBusca}
              />
              <Botao onPress={buscar}>Buscar</Botao>
              <Divider mt={5} />
            </VStack>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
            <EntradaTexto label="Data" placeholder={resultadoBusca.dataCriacao} value={data} onChangeText={setData} />
            <EntradaTexto label="Status" placeholder={resultadoBusca.status} value={status} onChangeText={setStatus} />
            <EntradaTexto label="Descrição" placeholder={resultadoBusca.descricao} value={descricao} onChangeText={setDescricao}/>
            <Botao onPress={modificar}>Atualizar</Botao>
            </VStack>
        </ScrollView>       
    )}



      
      