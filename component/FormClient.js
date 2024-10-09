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
  Linking,
} from "react-native";

import { CREATE_CLIENT, FIND_BY_ID_CLIENT, UPDATE_CLIENT } from "../util/urls";
redirectToEdit = (id) => {
  navigation.navigate("Equipment", { paramKey: id });
};
const FormClient = ({ route, navigation }) => {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [novo, setNovo] = useState(false);
  redirectToEdit = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Equipment", params: { paramKey: id } }],
    });
  };
  useEffect(() => {
    const params = route.params;
    if (params) {
      setNovo(false);
      idClient = route.params.paramKey;
      setId(idClient);
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
      return () => {
        console.log("Componente desmontado!");
      };
    } else {
      setNovo(true);
      console.log("valor => " + id);
    }
  }, []);
  const geraPDF = () => {
    Linking.canOpenURL(
      "http://ec2-52-67-56-229.sa-east-1.compute.amazonaws.com:8080/download?id=" +
        id
    ).then((supported) => {
      if (supported) {
        Linking.openURL(
          "http://ec2-52-67-56-229.sa-east-1.compute.amazonaws.com:8080/download?id=" +
            id
        );
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  };
  const handleSubmit = () => {
    if (novo) {
      //move para outra tela
      idAux = 0;
      fetch(CREATE_CLIENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nome,
          address: endereco,
          cpf: String(cpf),
          phone: telefone,
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          idAux = json.id;
          console.log("==================");
          console.log("id " + idAux);
          navigation.navigate("Equipment", { paramKey: idAux, flagNovo: true });
        });
    } else {
      fetch(UPDATE_CLIENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idAux,
          name: nome,
          address: endereco,
          cpf: String(cpf),
          phone: telefone,
          email: email,
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
    }
  };

  return (
    <>
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
          maxLength={15} // Limita o número de caracteres do CPF a 11
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

        <Button styles={styles.input} title="Enviar" onPress={handleSubmit} />

        <View style={stylesLink.container}>
          <Text>Detalhes do Equipamento!</Text>
          <TouchableOpacity onPress={redirectToEdit}>
            <Text style={stylesLink.link}>Clique aqui</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesLink.container}>
          <Text>Gera PDF!</Text>
          <TouchableOpacity onPress={geraPDF}>
            <Text style={stylesLink.link}>Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    // Para que os botões fiquem na horizontal
    justifyContent: "space-between", // Distribui o espaço igualmente entre os botões
    alignItems: "center",
    padding: 10,
  },
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
const stylesLink = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
export default FormClient;
