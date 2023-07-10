import { Text, View, StyleSheet } from "react-native";
import * as Device from 'expo-device'

const styles = StyleSheet.create({
    nomeservico: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,


    }, 
    nomemarca: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,
        
    },
    nomemarca: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,
        
    },
    nomemarca: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,
        
    },
    nomemarca: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,
        
    },
    nomemarca: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,
        
    },
    nomecaca: {
        fontSize: 22,
        color: "white",
        padding: 10,
        backgroundColor: "#606",
        marginBottom: 10,
        
    },
    Titulo: {
        fontSize: 10,
        color: "white",
        padding: 10,
        backgroundColor: "blue",
        marginBottom: 10,

    },

  });


export default function DeviceInfo() {
    return(
        <View>
              
            <Text style={styles.Titulo}>
                Suas Informações do Aplicativo:
            </Text>
            <Text style={styles.nomeservico}>
                O nome do seu aparelho é: {Device.deviceName}
            </Text>
            <Text style={styles.nomemarca}>
                O seu dispositivo é: {Device.brand}
            </Text>
            <Text style={styles.nomemarca}>
                O seu dispositivo é de: {Device.deviceYearClass}
            </Text>
            <Text style={styles.nomecaca}>
                A versão do seu sistema é: {Device.osVersion}
            </Text>
            <Text style={styles.nomemarca}>
                O seu dispositivo é: {Device.deviceYearClass}
            </Text>
            <Text style={styles.nomemarca}>
                O seu dispositivo tem o total: {Device.totalMemory} de memoria 
            </Text>
            <Text style={styles.nomemarca}>
                O seu dispositivo é: {Device.osInternalBuildId}
            </Text>
            <Text style={styles.nomemarca}>
                O seu dispositivo é: {Device.osBuildFingerprint}
            </Text>

          
          
        </View>
    )
}