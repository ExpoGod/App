import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "f5fffa",
    gap: 60,
  },
  hero: {
    position: "relative",
    width: "100%",
    height: 400,
    zIndex: 80,
  },
  heroBtn: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  heroTittle1: {
    fontFamily: "Poppins_700Bold",
    fontSize: 100,
    color: "#1210af",
    position: "absolute",
    left: 50,
    top: 0,
    zIndex: 2,
  },
  heroTittle2: {
    fontFamily: "Poppins_700Bold",
    fontSize: 100,
    color: "#1210af",
    position: "absolute",
    left: 70,
    top: 120,
    zIndex: 2,
  },
  heroText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 30,
    color: "#1210af",
    zIndex: 1,
    position: "absolute",
    width: 500,
    display: "flex",
    flexWrap: "wrap",
    top: 280,
    textAlign: "center",
    left: 60,
  },
  heroBanner: {
    position: "absolute",
    width: 900,
    top: -98,
    left: 40,
    zIndex: 0,
  },
  heroPerson: {
    position: "absolute",
    width: 500,
    top: -50,
    left: 440,
    zIndex: 0,
  },
});

export default menuStyles;
