import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FormLogin from "./component/FormLogin";
import ClientList from "./component/ClientList";
import FormClient from "./component/FormClient";
import FormEquipment from "./component/FormEquipment";
import About from "./component/About";

const Tab = createBottomTabNavigator();

function BottomNavegator() {
  return (
    <Tab.Navigator
      initialRouteName={ClientList}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "FormClient1") {
            iconName = "home";
            return <Icon name={iconName} color={color} size={size} />;
          } else if (route.name === "Clientes") {
            iconName = "view-dashboard";
          } else {
            iconName = "login";
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
          tabBarLabel: "Cadastro de Cliente",
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={About}
        options={{
          tabBarLabel: "Sobre",
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login sem aba */}

        <Stack.Screen
          name="Client"
          component={ClientList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Client1" component={ClientList} />
        <Stack.Screen
          name="Login"
          component={FormLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormClient1"
          component={FormClient}
          options={{
            title: "test",
          }}
        />
        <Stack.Screen
          name="Equipment"
          component={FormEquipment}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: true }}
        />
        {/* Tela com Bottom Tab Navigator */}
        <Stack.Screen
          name="Tela"
          component={BottomNavegator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
