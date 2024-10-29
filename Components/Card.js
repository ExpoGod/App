import { Text, View, TouchableOpacity, StyleSheet, Modal } from "react-native";
import sportsStyles from "../Styles/Components/Sports";
import { useState } from "react";
import { Video } from "expo-av";

const Card = (pregunta, answer, dir, setModalVisible) => {

  return (
    <div>
      <TouchableOpacity
        style={sportsStyles.question}
        onPress={() => setModalVisible(true)}
      >
        <Text style={sportsStyles.questionText}>
          {pregunta}
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
            source={require(dir)}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={styles.video}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              {answer}
            </Text>
          </View>
        </View>
      </Modal>
    </div>
  );
};

export default Card;