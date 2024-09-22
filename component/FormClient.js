import { useEffect } from "react";
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";

const FormClient = () => {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = () => {
    fetch(UPDATE_CLIENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: nome,
        address: endereco,
        cpf: String(cpf),
        phone: telefone,
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
    alert("Cliente editado com sucesso!");
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
});

export default FormClient;
