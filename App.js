import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClientList from "./component/ClientList";
import FormEquipment from "./component/FormEquipment";
import FormClient from "./component/FormClient";

import AnimationsA from "./component/AnimationsScale";
import AnimationsScale from "./component/AnimationsScale";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AnimationsA />
    </View>
  );
};
// Criando o Stack Navigator
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimationsA">
        <Stack.Screen name="Client" component={ClientList} />
        <Stack.Screen name="Equipment" component={FormEquipment} />
        <Stack.Screen name="FormClient" component={FormClient} />
        <Stack.Screen name="AnimationsA" component={AnimationsScale} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerImage: {
    width: SCREEN_WIDTH * 0.9, // Largura da imagem
    height: SCREEN_HEIGHT * 0.3, // Altura da imagem
    //  borderRadius: 25, // Deixa a imagem redonda, caso seja quadrada
    marginBottom: 10, // Espaço entre a imagem e o texto
    //  marginHorizontal: SCREEN_WIDTH * 0.1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
export default App;
