import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Translator from "./Screens/Translator";
import Interpreter from "./Screens/Interpreter";
import Questions from "./Screens/Questions";
import menuStyles from "./Styles/Screens/Menu";
import Header from "./Components/Header";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

function Home({ navigation }) {
  return (
    <SafeAreaView style={menuStyles.container}>
      <Header />
      <View>
        <Button
          title="Traductor de LSM"
          onPress={() => navigation.navigate("Translator")}
        />
      </View>
      <View>
        <Button
          title="Intérprete Virtual"
          onPress={() => navigation.navigate("Interpreter")}
        />
        <Button
          title="Preguntas Frecuentes"
          onPress={() => navigation.navigate("Questions")}
        />
      </View>
    </SafeAreaView>
  );
}

function App() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Translator"
          component={Translator}
          options={{
            title: "Intérprete Virtual",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              color: "#1210af",
            },
          }}
        />
        <Stack.Screen
          name="Interpreter"
          component={Interpreter}
          options={{
            title: "Traductor de LSM",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              color: "#1210af",
            },
          }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            title: "Preguntas Frecuentes",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              color: "#1210af",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
