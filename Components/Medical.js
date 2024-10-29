import { Text, View, TouchableOpacity , StyleSheet, Modal} from "react-native";
import medicalStyles from "../Styles/Components/Medical";
import { useState } from "react";
import legalStyles from "../Styles/Components/Legal";
import { Video } from "expo-av";

const Medical = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  return (
    
    <View style={medicalStyles.container}>
      {/* 
      Pregunta 1
      */}
      <TouchableOpacity
        style={legalStyles.question}
        onPress={() => setModalVisible(true)}
      >
        <Text style={legalStyles.questionText}>
          ¿Aceptan seguros médicos?
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
            source={require("../Assets/Videos/Medico01.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Si, puedes preguntar en recepción.
            </Text>
          </View>
        </View>
      </Modal>

      {/* 
      Pregunta 2
      */}
      <TouchableOpacity
        style={legalStyles.question}
        onPress={() => setModal2Visible(true)}
      >
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo agendar una cita?
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => setModal2Visible(false)}
      >
        <View style={styles.modalView}>
          <Video
            source={require("../Assets/Videos/Medico02.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              De manera electrónica o presencial en la clínica.
            </Text>
          </View>
        </View>
      </Modal>

      {/* 
      Pregunta 3
      */}
      <TouchableOpacity
        style={legalStyles.question}
        onPress={() => setModal3Visible(true)}
      >
        <Text style={legalStyles.questionText}>
          ¿Ofrecen servicios de laboratorio en el mismo lugar?
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal3Visible}
        onRequestClose={() => setModal3Visible(false)}
      >
        <View style={styles.modalView}>
          <Video
            source={require("../Assets/Videos/Medico03.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Si contamos con laboratorio.
            </Text>
          </View>
        </View>
      </Modal>


      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Cómo puedo agendar una cita médica si soy sordo y no puedo llamar por
          teléfono?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Ofrecen intérpretes en las clínicas para personas sordas?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Cómo puedo entender los resultados de mis estudios médicos si no
          puedo escuchar?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Qué documentos necesito para solicitar una pensión o incapacidad?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Cómo puedo obtener una segunda opinión médica?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Qué debo hacer si tengo una reacción adversa a un medicamento?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Cómo puedo acceder a mis registros médicos?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Qué debo hacer si necesito atención médica fuera del horario de
          consulta?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Cómo puedo prevenir infecciones en el hospital?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={medicalStyles.question}>
        <Text style={medicalStyles.questionText}>
          ¿Qué opciones de tratamiento existen para mi condición médica?
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

export default Medical;
