import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Cadastro from "./Cadastro";
import Login from "./Login"
import Tabs from "./Tabs";

import BuscarAtivo from "./crudAtivos/buscarAtivos";
import ListarTodosAtivos from "./crudAtivos/listarTodosAtivos";
import CriarAtivos from "./crudAtivos/criarAtivos";
import ModificarAtivos from "./crudAtivos/modificarAtivos";

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
                    name="ListarTodosAtivos" component={ListarTodosAtivos} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="BuscarAtivo" component={BuscarAtivo} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="CriarAtivos" component={CriarAtivos} options={{headerShown: false}}
                />
                <Tab.Screen 
                    name="ModificarAtivos" component={ModificarAtivos} options={{headerShown: false}}
                />



                <Tab.Screen 
                    name="ListarTodasOS" component={ListarTodasOS} options={{headerShown: false}}
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