import { Text, TouchableOpacity, View } from "react-native";
import legalStyles from "../Styles/Components/Legal";

const Videos = [
  {
    id: "1",
    pregunta: "¿Dónde puedo encontrar un abogado si necesito ayuda legal?",
    source: require("../Assets/Videos/Legal01.mp4"),
  },
  {
    id: "2",
    pregunta: "¿Cómo puedo hacer una denuncia si fui víctima de un delito?",
    source: require("../Assets/Videos/Legal02.mp4"),
  },
  {
    id: "3",
    pregunta: "¿Qué pasos debo seguir para pagar mis impuestos?",
    source: require("../Assets/Videos/Legal03.mp4"),
  },
  {
    id: "4",
    pregunta: "¿Cómo puedo saber si tengo derecho a asistencia legal gratuita?",
    source: require("../Assets/Videos/Legal04.mp4"),
  },
  {
    id: "5",
    pregunta: "¿Qué debo hacer si quiero reclamar una herencia?",
    source: require("../Assets/Videos/Legal05.mp4"),
  },
];

const Legal = () => {
  return (
    <View style={legalStyles.container}>
      {Videos.map((video) => (
        <TouchableOpacity key={video.id} style={legalStyles.item}>
          <Text style={legalStyles.text}>{video.pregunta}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Legal;
