import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 50,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 75,
    color: "#1210af",
  },
  paragraph: {
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "Poppins_400Regular",
    fontSize: 30,
    width: 800,
    color: "#1210af",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default headerStyles;
