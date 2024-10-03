import { StyleSheet } from "react-native";

const legalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  item: {
    padding: 15,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#2196F3",
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  video: {
    width: "90%",
    height: "50%",
    borderRadius: 10,
  },
  responseText: {
    marginTop: 20,
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ff4444",
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default legalStyles;
