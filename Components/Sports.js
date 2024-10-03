import { Text, View, TouchableOpacity } from "react-native";
import sportsStyles from "../Styles/Components/Sports";

const Sports = () => {
  return (
    <View style={sportsStyles.container}>
      <TouchableOpacity style={sportsStyles.question}>
        <Text style={sportsStyles.questionText}>
          ¿Hay equipos deportivos especializados para personas con discapacidad?
        </Text>
      </TouchableOpacity>

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

export default Sports;
