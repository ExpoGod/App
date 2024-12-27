import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from "react-native";

function Login({ navigation }) {
  const [claveDependencia, setClaveDependencia] = useState("");
  const [idTablet, setIdTablet] = useState("");
  const [claveSecreta, setClaveSecreta] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    // Aquí va la lógica de autenticación
    try {
      const response = await fetch('http://10.0.2.2:8080/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clave_dependencia: claveDependencia,
          ID_tablet: idTablet,
          clave_secreta: claveSecreta
        }),
      });
      const answer = await response.json();
      

      if (response.status === 200) {
        setToken(answer.token);
        navigation.replace("Home"); 
      } else {
        alert("Datos de autenticación incorrectos. Verifica los campos e inténtalo nuevamente:" + answer.message);
      }

    } catch (e) {
      console.log('Error de Autenticacion: ' + e)
    }


  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Clave Dependencia"
        value={claveDependencia}
        onChangeText={setClaveDependencia}
      />

      <TextInput
        style={styles.input}
        placeholder="ID Tablet"
        value={idTablet}
        onChangeText={setIdTablet}
      />

      <TextInput
        style={styles.input}
        placeholder="Clave Secreta"
        value={claveSecreta}
        onChangeText={setClaveSecreta}
        secureTextEntry
      />

      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
