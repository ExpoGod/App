import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import legalStyles from "../Styles/Components/Legal";

function Legal() {
  return (
    <View style={legalStyles.container}>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Dónde puedo encontrar un abogado si necesito ayuda legal?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo hacer una denuncia si fui víctima de un delito?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Qué pasos debo seguir para pagar mis impuestos?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Cómo puedo saber si tengo derecho a asistencia legal gratuita?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={legalStyles.question}>
        <Text style={legalStyles.questionText}>
          ¿Qué debo hacer si quiero reclamar una herencia?
        </Text>
      </TouchableOpacity>
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

export default Legal;
