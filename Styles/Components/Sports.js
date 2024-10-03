import { StyleSheet } from "react-native";

const sportsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    width: "100%",
    height: "100%",
    gap: 15,
    paddingTop: 15,
    backgroundColor: "#2196f3",
  },

  question: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 120,
    backgroundColor: "#fefefe",
    borderRadius: 15,
  },
  questionText: {
    color: "#1210af",
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
  },
});

export default sportsStyles;
