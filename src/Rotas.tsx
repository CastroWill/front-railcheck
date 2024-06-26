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

import CadastroOS from "./crudOS/cadastroOS";
import ListarOS from "./crudOS/listarOS";
import AtualizarOS from "./crudOS/atualizarOS";
import RemoverOS from "./crudOS/removerOS";

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
                    name="CadastroOS" component={CadastroOS} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="ListarOS" component={ListarOS} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="AtualizarOS" component={AtualizarOS} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="RemoverOS" component={RemoverOS} options={{headerShown: false}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
};