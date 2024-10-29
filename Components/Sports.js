import { Text, View, TouchableOpacity, StyleSheet, Modal } from "react-native";
import sportsStyles from "../Styles/Components/Sports";
import { useState } from "react";
import { Video } from "expo-av";
import Card from './Card';

const Sports = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={sportsStyles.container}>
      <TouchableOpacity
        style={sportsStyles.question}
        onPress={() => setModalVisible(true)}
      >
        <Text style={sportsStyles.questionText}>
          ¿Cuáles son los beneficios del deporte adaptado para las personas con
          discapacidad?
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Video
            source={require("../Assets/Videos/Sports01.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              El deporte adaptado ofrece una amplia gama de beneficios para las
              personas con discapacidad, tanto a nivel físico como emocional y
              social.
            </Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Ofrecen programas de deporte para niños con discapacidad?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Cómo puedo acceder a las instalaciones deportivas adaptadas?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Hay competiciones exclusivas para deportistas con discapacidad?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Puedo solicitar asistencia personal para participar en las
          actividades?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Ofrecen talleres de integración deportiva para personas con
          discapacidad?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Tienen horarios especiales para personas con discapacidad?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Puedo usar las instalaciones deportivas sin estar en un programa?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Ofrecen asesoría para competir a nivel nacional o internacional?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Cómo puedo solicitar un entrenador personal especializado?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fefefe",
  },
  video: {
    width: 1000,
    height: 1550,
  },
  view: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "90%",
    height: 300,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
  },
});

export default Sports;
