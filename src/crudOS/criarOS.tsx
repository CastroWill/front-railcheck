import { VStack, Box, ScrollView, TextArea } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Botao } from "../componentes/Botao"
import { Titulo } from "../componentes/Titulo"

export default function CriarOS(){
    return(
        <ScrollView>
            <Titulo>Criar ordem de serviço</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <Box>
                    <EntradaTexto label="ID" placeholder="ID da OS" />
                    <EntradaTexto label="Data" placeholder="Data de criação da OS" />
                    <EntradaTexto label="Status" placeholder="Status da OS" />

                    {/* Modificar depois por um <Textarea></Textarea> */}
                    <EntradaTexto label="Descrição" placeholder="Digite a descrição da falha" />
                </Box>
                <Botao>Criar</Botao>
                <Botao>Cancelar</Botao>               
            </VStack>
            
        </ScrollView>
    )}