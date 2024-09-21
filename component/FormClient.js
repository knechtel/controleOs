import { useEffect } from "react";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import { FIND_BY_ID_CLIENT } from "../util/urls";

const FormClient = ({ route, navigation }) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const redirect = () => {
    navigation.navigate("FormClient", { paramKey: 0 });
  };
  useEffect(() => {
    // Código que será executado na inicialização do componente
    console.log("Componente montado ! " + route.params.paramKey);
    idClient = route.params.paramKey;
    fetch(FIND_BY_ID_CLIENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idClient,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setEmail(json["email"]);
        setNome(json["name"]);
        setEndereco(json["address"]);
        setCpf(json["cpf"]);
        setTelefone(json["phone"]);
      });
    // O retorno do useEffect (opcional) seria executado quando o componente for desmontado
    return () => {
      console.log("Componente desmontado!");
    };
  }, []);
  const handleSubmit = () => {
    // Aqui você pode adicionar lógica para processar ou enviar os dados
    Alert.alert(
      "Dados Enviados",
      `Nome: ${nome}\nCPF: ${cpf}\nTelefone: ${telefone}\nEmail: ${email}\nEndereço: ${endereco}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulário de Cliente</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
        maxLength={11} // Limita o número de caracteres do CPF a 11
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      <View style={styles.container}>
        <Button
          title="Equipamento"
          onPress={redirect}
          color="#841584"
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    justifyContent: "space-between",
    padding: 20,
  },
});

export default FormClient;
