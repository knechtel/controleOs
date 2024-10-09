import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AnimationsScale from "./component/AnimationsScale";
import ClientList from "./component/ClientList";
import FormClient from "./component/FormClient";
import FormEquipment from "./component/FormEquipment";
import About from "./component/About";
// Exemplo de tela de Login
// Exemplo de telas

// Criando o Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function BottomNavegator() {
  return (
    <Tab.Navigator
      initialRouteName={ClientList}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "FormClient1") {
            iconName = "home"; // Nome do ícone para a aba de login

            return <Icon name={iconName} color={color} size={size} />;
          } else if (route.name === "Clientes") {
            iconName = "view-dashboard"; // Nome do ícone para a aba de dashboard
          } else {
            iconName = "login"; // Nome do ícone para a aba de dashboard
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name="Clientes"
        component={ClientList}
        options={{
          tabBarLabel: "Clientes", // Rótulo personalizado para a aba de "Clientes"
        }}
      />
      <Tab.Screen
        name="FormClient1"
        component={FormClient}
        options={{
          title: "Cliente",
          tabBarLabel: "Cadastro de Cliente", // Rótulo personalizado para a aba de "Clientes"
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={About}
        options={{
          tabBarLabel: "Sobre", // Rótulo personalizado para a aba de "Clientes"
        }}
      />
    </Tab.Navigator>
  );
}

// Criando o Stack Navigator para controlar o login e as telas com tabs
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login sem aba */}

        <Stack.Screen
          name="Client"
          component={ClientList}
          options={{ headerShown: false }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen name="Client1" component={ClientList} />
        <Stack.Screen
          name="Login"
          component={AnimationsScale}
          options={{ headerShown: false }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen
          name="FormClient1"
          component={FormClient}
          options={{
            title: "test",
          }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen
          name="Equipment"
          component={FormEquipment}
          options={{ headerShown: true }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: true }} // Sem cabeçalho na tela de login
        />
        {/* Tela com Bottom Tab Navigator */}
        <Stack.Screen
          name="Tela"
          component={BottomNavegator}
          options={{ headerShown: false }} // Sem cabeçalho para as abas
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
