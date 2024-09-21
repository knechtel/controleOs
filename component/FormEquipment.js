import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FIND_BY_ID_CLIENT, FIND_BY_ID_EQUIPMENT } from "../util/urls";

const FormEquipment = ({ route, navigation }) => {
  const [descricao, setDescricao] = useState("");
  const [modelo, setModelo] = useState("");
  const [serial, setSerial] = useState("");
  const [marca, setMarca] = useState("");
  const [defeito, setDefeito] = useState("");
  const [preco, setPreco] = useState("");
  // useEffect será executado quando o componente for montado
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
        console.log("=================================================");
        console.log("=================================================");
        console.log(json["equipments"][0]["id"]);
        console.log("=================================================");
        console.log("=================================================");
      });
    // O retorno do useEffect (opcional) seria executado quando o componente for desmontado
    return () => {
      console.log("Componente desmontado!");
    };
  }, []); // O array vazio [] faz com que o useEffect seja executado apenas uma vez, na montagem.
  // Por exemplo, poderia ser uma chamada de API aqui
  const carregarDados = () => {
    // Simulação de uma função que carrega dados
    console.log("Carregando dados...");
  };
  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para uma API ou banco de dados
  };
  const redirect = () => {
    navigation.navigate("FormClient", { paramKey: 0 });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulário de Equipamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
      />

      <TextInput
        style={styles.input}
        placeholder="Serial"
        value={serial}
        onChangeText={setSerial}
      />

      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />

      <TextInput
        style={styles.input}
        placeholder="Defeito"
        value={defeito}
        onChangeText={setDefeito}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <Button title="Enviar" onPress={handleSubmit} />

      <Button title="Detalhes Cliente." onPress={redirect} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
    justifyContent: "space-between",
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

export default FormEquipment;
