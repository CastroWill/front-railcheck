import { ScrollView, VStack, Divider, Box } from "native-base"
import { EntradaTexto } from "../componentes/EntradaTexto"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"

export default function ModificarAtivo(){
    return(
        <ScrollView bgColor="white">
            <Titulo>Busca OS por ID</Titulo>
            <VStack flex={1} w="100%" alignItems="flex-start"  p={3}>
                <EntradaTexto label="ID" placeholder="Digite o ID do Ativo"></EntradaTexto>
                <Botao>Buscar</Botao>
                <Divider mt={5} />

                <Box>
                    <EntradaTexto label="Nome" placeholder="Digite o novo nome do ativo" />

                    {/* Modificar depois por um <Textarea></Textarea> */}
                    <EntradaTexto label="Descrição" placeholder="Digite a nova descrição do ativo" />
                </Box>

                <Botao>Salvar</Botao>
                <Botao mt={4}>Cancelar</Botao>
            </VStack>
        </ScrollView>
    )}