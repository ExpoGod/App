import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
import interpreterStyles from "../Styles/Screens/Interpreter";

const videos = [
  {
    id: "1",
    title: "Acta",
    source: require("../Assets/Videos/Words/acta.mov"),
  },
  {
    id: "2",
    title: "Artículo",
    source: require("../Assets/Videos/Words/articulo.mov"),
  },
  {
    id: "3",
    title: "Castigo",
    source: require("../Assets/Videos/Words/castigo.mov"),
  },
  {
    id: "4",
    title: "Defender",
    source: require("../Assets/Videos/Words/defender.mov"),
  },
  {
    id: "5",
    title: "Firma",
    source: require("../Assets/Videos/Words/firma.mov"),
  },
  {
    id: "6",
    title: "Información",
    source: require("../Assets/Videos/Words/informacion.mov"),
  },
  {
    id: "7",
    title: "Jurídico",
    source: require("../Assets/Videos/Words/juridico.mov"),
  },
  {
    id: "8",
    title: "Reglas",
    source: require("../Assets/Videos/Words/reglas.mov"),
  },
];

function Interpreter() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].source);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [selectedVideo]);

  return (
    <View style={interpreterStyles.container}>
      <Video
        ref={videoRef}
        source={selectedVideo}
        style={styles.video}
        resizeMode="contain"
        isLooping
        shouldPlay
      />
      <ScrollView style={styles.scrollView}>
        {videos.map((video) => (
          <TouchableOpacity
            key={video.id}
            onPress={() => setSelectedVideo(video.source)}
          >
            <Text style={styles.videoTitle}>{video.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 1800,
  },
  scrollView: {
    position: "absolute",
    backgroundColor: "#1210af",
    width: "70%",
    height: 210,
    marginTop: 20,
    bottom: 20,
    borderRadius: 20,
  },
  videoTitle: {
    fontSize: "Poppins_600SemiBold",
    fontSize: 25,
    marginVertical: 10,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});

export default Interpreter;
