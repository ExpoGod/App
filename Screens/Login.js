import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  ActivityIndicator
} from "react-native";
import * as SecureStore from 'expo-secure-store';


function Login({ navigation }) {
  const [claveDependencia, setClaveDependencia] = useState("");
  const [idTablet, setIdTablet] = useState("");
  const [claveSecreta, setClaveSecreta] = useState("");
  const [loading, setLoading] = useState(true);
  const ip = 'http://192.168.3.9:8080/';

  const handleLogin = async () => {
    // Aquí va la lógica de autenticación
    try {
      const response = await fetch(ip, {
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
        deleteToken();
        saveToken(answer.token);
        navigation.replace("Home");
      } else {
        alert("Datos de autenticación incorrectos. Verifica los campos e inténtalo nuevamente:" + answer.message);
      }

    } catch (e) {
      console.log('Error de Autenticacion: ' + e)
    }
  };

  async function saveToken(token) {
    try {
      await SecureStore.setItemAsync('sessionToken', 'Token ' + token);
      console.log('Token guardado de forma segura.');
    } catch (error) {
      console.error('Error al guardar el token:', error);
    }
  };

  async function deleteToken() {
    try {
      await SecureStore.deleteItemAsync('sessionToken');
      console.log('Token eliminado de forma segura.');
    } catch (error) {
      console.error('Error al eliminar el token:', error);
    }
  };

  async function getToken() {
    try {
      const tokenTemp = await SecureStore.getItemAsync('sessionToken');
      if (tokenTemp) {
        return tokenTemp;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al recuperar el token:', error);
      return null;
    }
  }

  async function checkToken() {
    const token = await getToken();
    if (token != null) {
      try {
        const response = await fetch(ip + 'session_auth/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
        });
        const answer = await response.json();
        if (response.status === 200) {
          navigation.replace("Home");
        } else {
          deleteToken();
          setLoading(false);
        }

      } catch (e) {
        console.log('Error de Autenticacion: ' + e)
      }
      //navigation.replace("Home");
    }
  }

  useEffect(() => {
    checkToken();
    return () => {

    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Modal de carga */}
      <Modal
        visible={loading}
        transparent={true}       // Para que se vea un fondo semi-transparente
        animationType="none"    // Quita la animación del modal si lo deseas
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size="large" color="#333" />
            <Text style={{ marginTop: 10 }}>Cargando...</Text>
          </View>
        </View>
      </Modal>

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

      <Button title="Entrar" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  // Estilos para el modal
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040', // Fondo semi-transparente
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Login;
