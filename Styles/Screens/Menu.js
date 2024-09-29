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
  titleContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 35,
    color: "#1210af",
  },
  paragraph: {
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "Poppins_400Regular",
    color: "#1210af",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default menuStyles;
