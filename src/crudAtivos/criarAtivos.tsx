import { VStack, Box, ScrollView, TextArea } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Botao } from "../componentes/Botao"
import { Titulo } from "../componentes/Titulo"

export default function CriarAtivo(){
    return(
        <ScrollView>
            <Titulo>Criar ordem de serviço</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <Box>
                    <EntradaTexto label="ID" placeholder="ID do Ativo" />
                    <EntradaTexto label="Nome" placeholder="Digite um nome para o seu ativo" />
                    {/* Modificar depois por um <Textarea></Textarea> */}
                    <EntradaTexto label="Descrição" placeholder="Digite a descrição do ativo" />
                </Box>
                <Botao>Criar</Botao>
                <Botao mt={4}>Cancelar</Botao>               
            </VStack>
            
        </ScrollView>
    )}