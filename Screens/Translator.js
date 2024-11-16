import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, TextInput, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RTCView, mediaDevices, RTCPeerConnection, RTCSessionDescription } from 'react-native-webrtc';
import uuid from 'react-native-uuid';


let peerConstraints = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
            urls: 'turn:openrelay.metered.ca:80',
            username: 'openrelayproject',
            credential: 'openrelayproject'
        }
    ]
};

let mediaConstraints = {
    audio: false,
    video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: 15,
        facingMode: 'user' // 'environment' para la cámara trasera
    }
};

let sessionConstraints = {
    mandatory: {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: true,
        VoiceActivityDetection: false
    }
};

const Traductor = () => {
    const [texto, setTexto] = useState('');
    const [localMediaStream, setLocalMediaStream] = useState(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [ipAddress, setIpAddress] = useState(''); // Estado para la dirección IP
    const [ipSet, setIpSet] = useState(false); // Estado para verificar si la IP ha sido establecida
    const [modalVisible, setModalVisible] = useState(true); // Controla la visibilidad del Modal
    const socket = useRef(null);
    const pc = useRef(null);
    //const dc = useRef(null);
    const [dc, setDc] = useState(null);
    const [dcOpen, setDcOpen] = useState(false);
    const peerId = uuid.v4();
    let lastWord = null;

    function closePC() {
        console.log('Componente desmontado');
        /*if (isStreaming) {
            start();
        }*/
        if (pc.current) {
            pc.current.close();
        }

        if (socket.current) {
            socket.current.close();
        }
    }

    function sendText() {
        //socket.current.send('Ready');
        try {
            dc.send('Ready ' + peerId);
            console.log('Ready message sent');
        } catch (e) {
            console.log('Error enviando Ready:', e);
        }
    };

    async function requestPermissions() {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
            if (
                granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                console.log('You can use the camera and microphone');
            } else {
                console.log('Camera or Microphone permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const createSocketConnection = () => {
        //ws://${ipAddress}:8000/ws/feedback   Django
        //ws://${ipAddress}:8080/ws             flask
        const SOCKET_SERVER_URL = `ws://${ipAddress}:8080/ws/feedback`;
        const websocket = new WebSocket(SOCKET_SERVER_URL);

        websocket.onopen = () => {
            console.log('Conectado al WebSocket');
        };

        websocket.onmessage = (e) => {
            try {
                const firstWord = e.data;

                if (firstWord !== "null" && firstWord !== lastWord) {
                    setTexto('');
                    setTexto((prevTexto) => {
                        const palabras = prevTexto.split(' ');


                        const nuevasPalabras = [...palabras, firstWord];

                        if (nuevasPalabras.length > 10) {
                            nuevasPalabras.shift();
                        }

                        return nuevasPalabras.join(' ');
                    });
                    lastWord = firstWord;
                }
            } catch (error) {
                console.log('Mensaje Recibido: ', e.message)
            }
            if (e.data === 'ping') {
                websocket.send('pong');
            }
        };

        websocket.onerror = (e) => {
            console.error('Error en WebSocket:', e.message);
        };

        websocket.onclose = (e) => {
            console.log('WebSocket desconectado:', e.reason);
        };

        socket.current = websocket;
    };

    const negotiate = async () => {
        //http://${ipAddress}:8000/api/webrtc/offer   Django
        //http://${ipAddress}:8080/offer              flask
        const SIGNALING_SERVER_URL = `http://${ipAddress}:8080/api/webrtc/offer`;
        const offerDescription = await pc.current.createOffer(sessionConstraints);
        await pc.current.setLocalDescription(offerDescription);

        try {
            const response = await fetch(SIGNALING_SERVER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sdp: offerDescription.sdp,
                    type: offerDescription.type,
                    peer_id: peerId
                }),
            });
            const answer = await response.json();
            //console.log('Respuesta del servidor: ' + answer.data)

            if (pc.current.signalingState != 'stable') {
                await pc.current.setRemoteDescription(new RTCSessionDescription(answer));
            } else {
                console.log('Renegociacion Denegada')
            }

            console.log('Negociación Exitosa')
        } catch (e) {
            console.log('Error al Negociar: ' + e)
        }
    };

    const createPeerConnection = () => {
        try {
            pc.current = new RTCPeerConnection(peerConstraints);
            console.log('WebRTC ON')
        } catch {
            console.log('WebRTC Error')
        }

        // Listeners para los eventos de Streaming
        pc.current.addEventListener('connectionstatechange', event => {
            console.log('Connection state change:', pc.current.connectionState);
        });

        pc.current.addEventListener('icecandidate', event => {
            if (event.candidate) {
                console.log('New ICE candidate:', event.candidate);
            } else {
                console.log('All ICE candidates have been sent');
            }
        });

        pc.current.addEventListener('icecandidateerror', event => {
            console.error('ICE candidate error:', event);
        });

        pc.current.addEventListener('iceconnectionstatechange', async event => {
            console.log('ICE connection state change:', pc.current.iceConnectionState);
        });

        pc.current.addEventListener('icegatheringstatechange', event => {
            console.log('ICE gathering state change:', pc.current.iceGatheringState);
        });

        pc.current.addEventListener('negotiationneeded', async event => {
            console.log('Negotiation needed');
            // Iniciar Negociación
            await negotiate();
        });

        pc.current.addEventListener('signalingstatechange', event => {
            console.log('Signaling state change:', pc.current.signalingState);
        });

        pc.current.addEventListener('track', event => {
            console.log('Track event:', event.track);
        });

        pc.current.onicecandidateerror = (event) => {
            console.error('ICE Candidate Error:', event.errorText);
        };

        pc.current.addEventListener('datachannel', event => {
            const receiveChannel = event.channel;
            console.log('Data channel received:', receiveChannel.label);

            receiveChannel.addEventListener('open', () => {
                console.log('Data channel is open');
            });

            receiveChannel.addEventListener('message', event => {
                console.log('Received message:', event.data);
                // Manejo de mensajes recibidos
            });

            receiveChannel.addEventListener('close', () => {
                console.log('Data channel is closed');
            });
        });



    };

    const initCamera = async () => {
        // Obtén la cámara 
        try {
            mediaDevices.getUserMedia(mediaConstraints)
                .then(function (answer) {
                    setLocalMediaStream(answer);
                })

        } catch (err) {
            // Manejar Error
            console.log('Error al obtener cámara')
        };
    };

    const dataChannelCreation = async () => {
        //Creacion del canal de datos
        let datachannel = pc.current.createDataChannel(peerId);
        datachannel.addEventListener('open', event => {
            console.log('datachannel opened')
            datachannel.send('ping')
        });

        datachannel.addEventListener('close', event => {
            setDcOpen(false);
            setDc(null);
            datachannel.close();
            console.log('Cerrado DataChannel');
        });

        datachannel.addEventListener('message', message => {
            console.log('Received' + message.data)
        });
        setDc(datachannel);
        setDcOpen(true);

    };

    const start = async () => {
        if (!isStreaming) {
            if (dcOpen) {
                const newVideoTrack = localMediaStream.getVideoTracks()[0]
                pc.current.addTrack(newVideoTrack, localMediaStream);
                await negotiate();
                console.log('Pista de video añadida nuevamente');
            }
            else {
                // Agrega la pista de video local al peer connection
                localMediaStream.getTracks().forEach(track => {
                    pc.current.addTrack(track, localMediaStream);
                });
                setIsStreaming(true);
                console.log('Streaming iniciado')

                //dataChannelCreation();

            }

        } else {
            //sendText();
            console.log('Iniciada detención de transmisión')
            /*const videoSender = pc.current.getSenders().find(sender => sender.track && sender.track.kind === 'video');

            if (videoSender) {
                pc.current.removeTrack(videoSender); // Remover la pista de video de la conexión
                //await negotiate();
                /*if(!dcOpen)
                    dataChannelCreation();
                console.log('Transmision de video detenida');
                //sendText();
            }*/
            closePC();
            createPeerConnection();
            dataChannelCreation();
            sendText();
            setIsStreaming(false);
        }
    };

    useEffect(() => {
        if (ipSet) {
            requestPermissions();
            initCamera();
            createPeerConnection();
            //createSocketConnection();
        }

        return () => {
            closePC();
        }
    }, [ipSet]); // Ejecutar useEffect cuando ipSet cambie

    const handleConnect = () => {
        if (ipAddress.trim() !== '') {
            setIpSet(true);
            setModalVisible(false); // Ocultar el modal
        } else {
            Alert.alert('Error', 'Por favor, ingrese una dirección IP válida.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Modal para ingresar la dirección IP */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <Text style={styles.ipPrompt}>Ingrese la dirección IP del servidor:</Text>
                        <TextInput
                            style={styles.ipInput}
                            placeholder="Ejemplo: 192.168.1.1"
                            value={ipAddress}
                            onChangeText={setIpAddress}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity
                            style={styles.connectButton}
                            onPress={handleConnect}
                        >
                            <Text style={styles.connectButtonText}>Conectar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Contenido principal de la aplicación */}
            {/* Imagen de CITEIM */}
            <View style={styles.containerImagen}>
                {/* Puedes agregar una imagen aquí si lo deseas */}
            </View>

            {/* Iconos de salir y recargar */}
            <View style={styles.containerIconos}>
                <TouchableOpacity onPress={() => { setTexto('') }}>
                    <Icon name="backspace" size={50} color="#fff" style={{ top: 10 }} />
                </TouchableOpacity>
            </View>

            {/* Cuadro de la cámara con el botón y el cuadro de texto */}
            <View style={styles.containerCamara}>
                <View style={styles.cameraView}>
                    {localMediaStream && (
                        <RTCView
                            mirror={true}
                            streamURL={localMediaStream.toURL()}
                            style={styles.rtcView}
                            objectFit="cover"
                        />
                    )}
                </View>

                {/* Contenedor para los botones */}
                <View style={styles.buttonContainer}>
                    {/* Botón de Streaming */}
                    <TouchableOpacity
                        onPress={start}
                        style={[
                            styles.streamingButton,
                            { backgroundColor: isStreaming ? 'red' : '#fff' }
                        ]}
                    />

                    {/* Botón de Envío de Texto */}
                    {/*<TouchableOpacity
                        onPress={sendText}
                        style={styles.sendTextButton}
                    >
                        <Icon name="send" size={30} color="#fff" />
                    </TouchableOpacity>*/}
                </View>

                <View style={styles.styleCuadroTexto}>
                    <Text style={{ textAlign: 'center', fontSize: 28, color: '#000' }}>Traductor de LSM a texto</Text>
                    <View style={styles.textOutput}>
                        <Text style={{ textAlign: 'center', fontSize: 45, top: 40, color: '#024acf' }}>{texto}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8bb4d0",
    },
    containerImagen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerIconos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    },
    containerCamara: {
        flex: 15,
        alignItems: 'center',
    },
    styleImagen: {
        width: 200,
        height: 200,
        top: -50,
    },
    styleCuadroTexto: {
        backgroundColor: '#fff',
        width: '100%',
        height: '30%',
    },
    cameraView: {
        backgroundColor: 'purple',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rtcView: {
        width: '100%',
        height: '100%',
    },
    textOutput: {
        backgroundColor: '#d9d9d9',
        width: '95%',
        height: '75%',
        marginLeft: 20,
        borderRadius: 35,
    },
    // Estilos para el Modal
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semitransparente
    },
    modalView: {
        width: '80%',
        backgroundColor: '#8bb4d0',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    ipPrompt: {
        fontSize: 20,
        marginBottom: 15,
        color: '#fff',
        textAlign: 'center',
    },
    ipInput: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '100%',
        color: '#fff',
    },
    connectButton: {
        backgroundColor: '#024acf',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: '100%',
    },
    connectButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Estilos para los botones
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 580,
        alignItems: 'center',
        justifyContent: 'center',
    },
    streamingButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 13,
        borderColor: 'red',
        marginRight: 20,
    },
    sendTextButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#024acf',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Traductor;
