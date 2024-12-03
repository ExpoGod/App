import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Login from "./Screens/Login"; // Importa el nuevo componente Login
import Home from "./Screens/Home";
import Translator from "./Screens/Translator";
import Interpreter from "./Screens/Interpreter";
import Questions from "./Screens/Questions";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  async function requestPermissions() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      if (
        granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.RECORD_AUDIO"] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("You can use the camera and microphone");
      } else {
        console.log("Camera or Microphone permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestPermissions();
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Ruta de Login */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        {/* Ruta de Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        {/* Otras rutas */}
        <Stack.Screen
          name="Translator"
          component={Translator}
          options={{
            title: "Traductor de LSM",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1210af",
            },
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              color: "#fff",
              fontSize: 30,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Interpreter"
          component={Interpreter}
          options={{
            title: "Intérprete Virtual",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1210af",
            },
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              color: "#fff",
              fontSize: 30,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            title: "Catálogo de Respuestas",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#1210af",
            },
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              color: "#fff",
              fontSize: 30,
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
