import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { pegarDadosUsuario } from "../servicos/UsuarioServico"
import { Usuario } from "../interfaces/usuario"

export default function Perfil({navigation} : any){
    const [dadosUsuario, setDadosUsuario] = useState({} as Usuario)

    //pega dados ao entrar na tela
    useEffect(() => {
        async function  dadosUsuario(){
            const usuarioId = await AsyncStorage.getItem('usuarioId')    
            if(!usuarioId) return null

            const resultado = await pegarDadosUsuario(usuarioId)
            if(resultado){
                setDadosUsuario(resultado)
                console.log('Dados do usuário', resultado)
            }
        }
        dadosUsuario()
    }, [])

    function deslogar(){
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('usuarioId')
        navigation.replace('Login')
        console.log('Usuário deslogado')
    }

    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo color={"blue.500"}>Meu perfil</Titulo>
                <Avatar size={"xl"} source = {{uri: "https://github.com/lobregate.png"}} mt={5} />

                <Titulo color={"blue.500"}>Informações pessoais</Titulo>
                <Titulo fontSize={"lg"} mb={1}>{dadosUsuario.nome}</Titulo>
                <Text>20/11/1990</Text>
                <Text>São Paulo-SP</Text>
                <Text>Técnico de manutenção</Text>
                <Text>{dadosUsuario.email}</Text>
                <Divider mt={5}/>
                <Botao onPress={deslogar}>Deslogar</Botao>

            </VStack>
        </ScrollView>
    )
}