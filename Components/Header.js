import { View, Text } from "react-native";
import headerStyles from "../Styles/Components/Header";

const Header = () => {
  return (
    <>
      <View style={headerStyles.header}>
        <Text style={headerStyles.title}>¡Hey! Bienvenido/a 👋</Text>
        <Text style={headerStyles.paragraph}>
          Explora nuestras funciones para mejorar la comunicación en lengua de
          señas
        </Text>
      </View>
    </>
  );
};

export default Header;
