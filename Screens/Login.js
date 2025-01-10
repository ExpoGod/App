import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import * as SecureStore from 'expo-secure-store';


function Login({ navigation }) {
  const [claveDependencia, setClaveDependencia] = useState("");
  const [idTablet, setIdTablet] = useState("");
  const [claveSecreta, setClaveSecreta] = useState("");
  const [loading, setLoading] = useState(false);
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
    //checkToken();
    navigation.replace("Home");
    return () => {

    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>

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

        <Image
          source={require("../Assets/Images/Blue.png")}
          style={styles.blueShape}
        />

        <Image
          source={require("../Assets/Images/Purple.png")}
          style={styles.purpleShape}
        />

        <Text style={styles.loginText}>Iniciar Sesión</Text>


        <Image
          source={require("../Assets/Images/Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>A la Mano</Text>


        <View style={styles.formContainer}>
          <View style={styles.form}>
            <Text style={styles.inputText} >
              Clave Dependencia
            </Text>
            <TextInput
              style={styles.input}
              value={claveDependencia}
              onChangeText={setClaveDependencia}
            />
            <Text style={styles.inputText} >ID Tablet</Text>
            <TextInput
              style={styles.input}
              value={idTablet}
              onChangeText={setIdTablet}
            />
            <Text style={styles.inputText}>Clave Secreta</Text>
            <TextInput
              style={styles.input}
              value={claveSecreta}
              onChangeText={setClaveSecreta}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 50,
    backgroundColor: "white"
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
  formContainer:
  {
    position: "absolute",
    top: 950,
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: 600,
  },
  buttonText: {
    position: "relative",
    display: "flex",
    paddingTop: 10,
    paddingLeft: 70,
    justifyContent: "center",
    alignItems: 'center',
    width: 300,
    height: "auto",
    fontSize: 50,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#12122E",
    borderRadius: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  inputText: {
    fontSize: 20,
    paddingLeft: 20,
    color: "#F5FFFA",
    fontFamily: "Poppins_500Medium",
  },
  purpleShape: {
    position: "absolute",
    width: 1000,
    height: 915,
    top: 700,
    resizeMode: 'contain',
  },
  blueShape: {
    position: "absolute",
    width: 700,
    height: 400,
    top: -81,
    resizeMode: 'contain',
  },
  loginText: {
    position: "absolute",
    top: 40,
    left: 60,
    fontSize: 60,
    color: "#F5FFFA",
    fontFamily: "Poppins_700Bold"
  },
  logo: {
    position: "absolute",
    top: 400,
    left: 300,
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  logoText: {
    position: "absolute",
    top: 800,
    left: 350,
    fontSize: 60,
    color: "#F5FFFA",
    fontFamily: "Poppins_700Bold"
  },
  keyboard: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
  }
});

export default Login;
