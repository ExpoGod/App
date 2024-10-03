import * as React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Modal } from "react-native";
import legalStyles from "../Styles/Components/Legal";
import { Video } from "expo-av";

function Legal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  const [modal5Visible, setModal5Visible] = useState(false);

  return (
    <View style={legalStyles.container}>
      {/* 
      Pregunta 1
      */}
      <TouchableOpacity
        style={legalStyles.question}
        onPress={() => setModalVisible(true)}
      >
        <Text style={legalStyles.questionText}>
          ¿Dónde puedo encontrar un abogado si necesito ayuda legal?
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
            source={require("../Assets/Videos/Legal01.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Puedes buscar abogados en línea, preguntar a amigos o familiares,
              o acudir a clínicas legales gratuitas que ofrecen asesoría para
              jóvenes.
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
          ¿Cómo puedo hacer una denuncia si fui víctima de un delito?
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
            source={require("../Assets/Videos/Legal02.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Puedes ir a la comisaría más cercana, hacer la denuncia en línea
              en algunos casos, o llamar a una línea de atención para recibir
              orientación sobre qué hacer.
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
          Qué pasos debo seguir para pagar mis impuestos?
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
            source={require("../Assets/Videos/Legal03.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Primero, regístrate en el sistema de impuestos de tu país. Luego,
              llena la declaración con tus ingresos y gastos, y paga en línea o
              en un banco antes de la fecha límite
            </Text>
          </View>
        </View>
      </Modal>
      {/* 
      Pregunta 4
      */}
      <TouchableOpacity
        style={legalStyles.question}
        onPress={() => setModal4Visible(true)}
      >
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo saber si tengo derecho a asistencia legal gratuita?
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal4Visible}
        onRequestClose={() => setModal4Visible(false)}
      >
        <View style={styles.modalView}>
          <Video
            source={require("../Assets/Videos/Legal04.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Si tus ingresos son bajos o estás en una situación vulnerable,
              podrías calificar para un abogado gratuito o a bajo costo.
              Consulta en organizaciones locales o en el sitio web del gobierno.
            </Text>
          </View>
        </View>
      </Modal>
      {/* 
      Pregunta 5
      */}
      <TouchableOpacity
        style={legalStyles.question}
        onPress={() => setModal5Visible(true)}
      >
        <Text style={legalStyles.questionText}>
          ¿Qué debo hacer si quiero reclamar una herencia?
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal5Visible}
        onRequestClose={() => setModal5Visible(false)}
      >
        <View style={styles.modalView}>
          <Video
            source={require("../Assets/Videos/Legal05.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              Reúne todos los documentos relacionados y consulta a un abogado
              especializado en herencias para que te guíe en el proceso
            </Text>
          </View>
        </View>
      </Modal>
      {/**/}
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo registrar un negocio pequeño?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Dónde puedo aprender más sobre mis derechos laborales?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo solicitar una orden de protección si me siento en peligro?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Qué debo hacer si quiero iniciar un proceso de divorcio?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo obtener asesoría legal para resolver un problema de
          alquiler?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
export default Legal;
