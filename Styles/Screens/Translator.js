import { StyleSheet } from "react-native";

const translatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    position: "relative",
  },
  box: {
    width: "95%",
    height: 450,
    backgroundColor: "grey",
    position: "absolute",
    bottom: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  boxText: {
    fontFamily: "Poppins_400Regular",
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: 40,
  },
});

export default translatorStyles;
