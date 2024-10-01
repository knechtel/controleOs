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
// Exemplo de tela de Login
// Exemplo de telas

// Criando o Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function BottomNavegator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "FormClient1") {
            iconName = "login"; // Nome do ícone para a aba de login
            return <Icon name={iconName} color={color} size={size} />;
          } else if (route.name === "Client") {
            iconName = "view-dashboard"; // Nome do ícone para a aba de dashboard
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Client" component={ClientList} />
      <Tab.Screen name="FormClient1" component={FormClient} />
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
        <Stack.Screen
          name="Client1"
          component={ClientList}
          options={{ headerShown: false }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen
          name="Login"
          component={AnimationsScale}
          options={{ headerShown: false }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen
          name="FormClient1"
          component={FormClient}
          options={{ headerShown: false }} // Sem cabeçalho na tela de login
        />
        <Stack.Screen
          name="Equipment"
          component={FormEquipment}
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
