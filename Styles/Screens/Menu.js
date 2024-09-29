import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "f5fffa",
    gap: 15,
  },
  hero: {
    position: "relative",
    width: "100%",
    height: 200,
    zIndex: 80,
  },
  heroBtn: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  heroTittle1: {
    fontFamily: "Poppins_700Bold",
    fontSize: 35,
    color: "#1210af",
    position: "absolute",
    left: 20,
    top: 0,
    zIndex: 2,
  },
  heroTittle2: {
    fontFamily: "Poppins_700Bold",
    fontSize: 35,
    color: "#1210af",
    position: "absolute",
    left: 30,
    top: 40,
    zIndex: 2,
  },
  heroText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#1210af",
    zIndex: 1,
    position: "absolute",
    maxWidth: 200,
    display: "flex",
    flexWrap: "wrap",
    top: 100,
    textAlign: "center",
    left: 20,
  },
  heroBanner: {
    position: "absolute",
    width: 330,
    top: -70,
    left: 15,
    zIndex: 0,
  },
  heroPerson: {
    position: "absolute",
    width: 180,
    top: -220,
    left: 170,
    zIndex: 0,
  },
});

export default menuStyles;
