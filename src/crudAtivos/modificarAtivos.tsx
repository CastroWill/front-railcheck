import { ScrollView, VStack, Divider, useToast } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { useState } from "react"
import { buscaAtivosPorId, modificaAtivoPorId } from "../servicos/AtivosServico"
import { Ativos } from "../interfaces/ativos"


export default function ModificarAtivos({navigation}){
    const [idBusca, setIdBusca] = useState ('')
    const [resultadoBusca, setResultadoBusca] = useState({} as Ativos)
    const [data, setData] = useState('')
    const [status, setStatus] = useState('')
    const [descricao, setDescricao] = useState('')
    const toast = useToast() 

    async function buscar(){
        if(!idBusca) return null
        const resultado = await buscaAtivosPorId (idBusca)
        if(resultado){
            setResultadoBusca(resultado);
            console.log(resultadoBusca);
        }
    }
    
    async function modificar() {
        const resultado = await modificaAtivoPorId({
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



      
      