import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Principal from "./Principal";
import OrdensServico from "./OrdensServico";
import Ativos from "./Ativos";
import Perfil from "./Perfil";

import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851",
        height:55,
        paddingBottom: 5,
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF",
}

const tabs = [
    {
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Ativos',
        component: Ativos,
        icon: 'subway-outline'
    },
    {
        name: 'Ordens de Serviço',
        component: OrdensServico,
        icon: 'build-outline'
    },    
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
]

export default function Tabs(){
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
        >
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name={tab.icon} color={color}
                            size={size} />
                        )
                    }}
                />
            ))
            } 
        </Tab.Navigator>
    )
}