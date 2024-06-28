import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Cadastro from "./Cadastro";
import Login from "./Login"
import Tabs from "./Tabs";

import CadastroAtivos from "./crudAtivos/cadastroAtivos";
import ListarAtivos from "./crudAtivos/listarAtivos";
import AtualizarAtivos from "./crudAtivos/atualizarAtivos";
import RemoverAtivos from "./crudAtivos/removerAtivos";

import ListarTodasOS from "./crudOS/listarTodasOS";
import BuscarOS from "./crudOS/buscarOS";
import CriarOS from "./crudOS/criarOS";
import ModificarOS from "./crudOS/modificarOS";

export default function Rotas(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Login" component={Login} options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Cadastro" component={Cadastro} options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Tabs" component={Tabs} options={{headerShown: false}}
                />


                <Tab.Screen 
                    name="CadastroAtivos" component={CadastroAtivos} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="ListarAtivos" component={ListarAtivos} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="AtualizarAtivos" component={AtualizarAtivos} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="RemoverAtivos" component={RemoverAtivos} options={{headerShown: false}}
                />



                <Tab.Screen 
                    name="CadastroOS" component={ListarTodasOS} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="BuscarOS" component={BuscarOS} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="CriarOS" component={CriarOS} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="ModificarOS" component={ModificarOS} options={{headerShown: false}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
};