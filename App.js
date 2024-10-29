import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View, Text, Button, Image, TouchableOpacity, PermissionsAndroid } from "react-native";
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
      <View style={menuStyles.hero}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Translator")}
          style={menuStyles.heroBtn}
        >
          <Image
            source={require("./Assets/Images/TranslatorShape.png")}
            style={menuStyles.heroBanner}
            resizeMode="contain"
          />
          <Image
            source={require("./Assets/Images/TranslatorPerson.png")}
            style={menuStyles.heroPerson}
            resizeMode="contain"
          />
          <View>
            <Text style={menuStyles.heroTitle1}>Traductor</Text>
            <Text style={menuStyles.heroTitle2}>de LSM</Text>
          </View>
          <Text style={menuStyles.heroText}>
            Traduce señas a texto en tiempo real, usando la cámara.
          </Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyles.footer}>
        <View style={menuStyles.footer1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Interpreter")}
            style={menuStyles.footerBtn1}
          >
            <Image
              source={require("./Assets/Images/InterpreterShape.png")}
              style={menuStyles.interShape}
              resizeMode="contain"
            />
            <Image
              source={require("./Assets/Images/InterpreterPerson.png")}
              style={menuStyles.interPerson}
              resizeMode="contain"
            />
            <Text style={menuStyles.interTitle1}>Intérprete</Text>
            <Text style={menuStyles.interTitle2}>Virtual</Text>
            <Text style={menuStyles.footerText1}>
              Convierte texto o voz en señas con un intérprete virtual.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={menuStyles.footer2}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Questions")}
            style={menuStyles.footerBtn2}
          >
            <Image
              source={require("./Assets/Images/QuestionsShape.png")}
              style={menuStyles.questionsShape}
              resizeMode="contain"
            />
            <Image
              source={require("./Assets/Images/Person1.png")}
              style={menuStyles.person1}
              resizeMode="contain"
            />
            <Image
              source={require("./Assets/Images/Person2.png")}
              style={menuStyles.person2}
              resizeMode="contain"
            />
            <Text style={menuStyles.questionsTitle1}>Catálogo</Text>
            <Text style={menuStyles.questionsTitle2}>Respuestas</Text>
            <Text style={menuStyles.questionsText}>
              Accede a una base de datos inteligente con respuestas rápidas.
            </Text>
          </TouchableOpacity>
        </View>
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

  async function requestPermissions() {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
            granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('You can use the camera and microphone');
        } else {
            console.log('Camera or Microphone permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};

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
