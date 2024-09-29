import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "f5fffa",
  },

  hero: {
    position: "relative",
  },
  heroTittle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 50,
    color: "#1210af",
  },
  heroText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#1210af",
  },
});

export default menuStyles;
