import { Text, View, Image } from "react-native";
import translatorStyles from "../Styles/Screens/Translator";

function Translator() {
  return (
    <View style={translatorStyles.container}>
      <Image
        source={require("../Assets/Gifs/loader.gif")}
        resizeMode="contain"
      />
      <View style={translatorStyles.box}>
        <Text style={translatorStyles.boxText}>Traduciendo...</Text>
      </View>
    </View>
  );
}

export default Translator;
