import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ClientList from "./ClientList";
import FormClient from "./FormClient";
import Home from "./Home";
import Settings from "./Settings";
const Drawer = createDrawerNavigator();

export default function About() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


