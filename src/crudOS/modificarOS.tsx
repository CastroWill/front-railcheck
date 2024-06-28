import { ScrollView, VStack, Button, Divider, Box } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import { Card } from "../componentes/Card"

export default function ListarTodasOS(){
    return(
        <ScrollView bgColor="white">
            <Titulo>Busca OS por ID</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <EntradaTexto label="ID" placeholder="Digite o ID da OS"></EntradaTexto>
                <Botao>Buscar</Botao>
                <Divider mt={5} />

                <Box>
                    <EntradaTexto label="Data" placeholder="Data de criação da OS" />
                    <EntradaTexto label="Status" placeholder="Status da OS" />

                    {/* Modificar depois por um <Textarea></Textarea> */}
                    <EntradaTexto label="Descrição" placeholder="Digite a descrição da falha" />
                </Box>

                <Botao>Salvar</Botao>
                <Botao>Cancelar</Botao>
            </VStack>
        </ScrollView>
    )}