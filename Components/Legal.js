import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";
import { Video } from "expo-av";
import legalStyles from "../Styles/Components/Legal";

const Videos = [
  {
    id: "1",
    pregunta: "¿Dónde puedo encontrar un abogado si necesito ayuda legal?",
    respuesta:
      "Puedes buscar abogados en línea, preguntar a amigos o familiares, o acudir a clínicas legales gratuitas que ofrecen asesoría para jóvenes.",
    source: require("../Assets/Videos/Legal01.mp4"),
  },
  {
    id: "2",
    pregunta: "¿Cómo puedo hacer una denuncia si fui víctima de un delito?",
    respuesta:
      "Puedes ir a la comisaría más cercana, hacer la denuncia en línea en algunos casos, o llamar a una línea de atención para recibir orientación sobre qué hacer.",
    source: require("../Assets/Videos/Legal02.mp4"),
  },
  {
    id: "3",
    pregunta: "¿Qué pasos debo seguir para pagar mis impuestos?",
    respuesta:
      "Primero, regístrate en el sistema de impuestos de tu país. Luego, llena la declaración con tus ingresos y gastos, y paga en línea o en un banco antes de la fecha límite.",
    source: require("../Assets/Videos/Legal03.mp4"),
  },
  {
    id: "4",
    pregunta: "¿Cómo puedo saber si tengo derecho a asistencia legal gratuita?",
    respuesta:
      "Si tus gastos son bajos o estás en una situación vulnerable, podrías calificar para un abogado gratuito o de bajo costo. Consulta en organizaciones locales o en el sitio web del gobierno.",
    source: require("../Assets/Videos/Legal04.mp4"),
  },
  {
    id: "5",
    pregunta: "¿Qué debo hacer si quiero reclamar una herencia?",
    respuesta:
      "Reúne todos los documentos relacionados y consulta a un abogado especializado en herencias para que te guíe en el proceso.",
    source: require("../Assets/Videos/Legal05.mp4"),
  },
];

const Legal = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <View style={legalStyles.container}>
      {Videos.map((video) => (
        <TouchableOpacity
          key={video.id}
          style={legalStyles.item}
          onPress={() => setSelectedVideo(video)}
        >
          <Text style={legalStyles.text}>{video.pregunta}</Text>
        </TouchableOpacity>
      ))}

      {/* Modal para reproducir el video */}
      {selectedVideo && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedVideo}
          onRequestClose={() => setSelectedVideo(null)}
        >
          <View style={legalStyles.modalContainer}>
            <Video
              source={selectedVideo.source}
              style={legalStyles.video}
              useNativeControls
              resizeMode="contain"
              onPlaybackStatusUpdate={(status) => {
                if (status.didJustFinish) {
                  setSelectedVideo(null); // Cerrar el video cuando termine
                }
              }}
            />
            {/* Mostrar respuesta debajo del video */}
            <Text style={legalStyles.responseText}>{selectedVideo.respuesta}</Text>
            <TouchableOpacity
              style={legalStyles.closeButton}
              onPress={() => setSelectedVideo(null)}
            >
              <Text style={legalStyles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Legal;
