import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Image,
} from "react-native";
import { FIND_USER } from "../util/urls";
export default class AnimationsScale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
      username: "",
      password: "",
      isLarge: false,
    };
  }
  handleLogin = () => {
    if (this.state.username === "admin" && this.state.password === "1234") {
      fetch(FIND_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: "maiquel",
          password: "123",
        }),
      })
        .then((response) => response.json())
        .then((json) => {});
      const { navigation } = this.props;
      navigation.navigate("Tela");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos");
    }
  };
  startAnimation = () => {
    const { isLarge } = this.state;
    Animated.timing(this.state.animation, {
      toValue: isLarge ? 1 : 2,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ isLarge: !isLarge });
    });
  };

  handleTextChangeUser = (newText) => {
    this.setState({ username: newText });
  };
  handleTextChangePassword = (newText) => {
    this.setState({ password: newText });
  };
  render() {
    const animatedStyles = {
      transform: [{ scale: this.state.animation }],
    };
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require("../assets/eletronicaLogo.png")}
          style={[styles.headerImage, animatedStyles]}
        />
        <Text
          style={{
            marginTop: 40,
            marginBottom: 120,
            fontSize: 24,
            color: "black",
          }}
        >
          Eletrônica São José
        </Text>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={this.username}
              onChangeText={this.handleTextChangeUser}
            />
            <TextInput
              style={styles.input}
              placeholder="senha"
              secureTextEntry
              value={this.password}
              onChangeText={this.handleTextChangePassword}
            />
            <Button title="Entrar" onPress={this.handleLogin} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 145,
    height: 160,
    backgroundColor: "white",
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
