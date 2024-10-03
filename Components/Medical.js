import { Text, View, TouchableOpacity } from "react-native";
import medicalStyles from "../Styles/Components/Medical";

const Medical = () => {
  return (
    <View style={medicalStyles.container}>
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

export default Medical;
