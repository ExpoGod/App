import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import menuStyles from "../Styles/Screens/Menu"; // Asegúrate de que la ruta sea correcta
import Header from "../Components/Header"; // Asegúrate de que la ruta sea correcta

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
            source={require("../Assets/Images/TranslatorShape.png")}
            style={menuStyles.heroBanner}
            resizeMode="contain"
          />
          <Image
            source={require("../Assets/Images/TranslatorPerson.png")}
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
              source={require("../Assets/Images/InterpreterShape.png")}
              style={menuStyles.interShape}
              resizeMode="contain"
            />
            <Image
              source={require("../Assets/Images/InterpreterPerson.png")}
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
              source={require("../Assets/Images/QuestionsShape.png")}
              style={menuStyles.questionsShape}
              resizeMode="contain"
            />
            <Image
              source={require("../Assets/Images/Person1.png")}
              style={menuStyles.person1}
              resizeMode="contain"
            />
            <Image
              source={require("../Assets/Images/Person2.png")}
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

export default Home;
