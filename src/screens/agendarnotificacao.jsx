import * as Notifications from 'expo-notifications';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';



const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: '#606',
        paddingBottom: 5,
        paddingHorizontal: 5,

    },

    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },

});


function Notify({ navigation }){
    const [expoToken, setExpoToken] = useState('');

    async function notificarExpo(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Deu horario pra tomar GH', 
                subtitle: 'APLIQUE A BOMBA', 
                body: 'PEGUE SUA AGULHA E APLIQUE O GH VAMO FICAR MONSTRAO', 
            },

            trigger: {
                seconds: 3,

            }
        })

        setExpoToken(token);
    }

    const ultimaNotificacao = Notifications.useLastNotificationResponse();
    async function exibirNotificacao(){
        alert('PEGUE SUA AGULHA E APLIQUE O GH VAMO FICAR MONSTRAO')    }


    useEffect(() => {
        exibirNotificacao();
    }, [ultimaNotificacao])

    return(
        <View>
            <View>
                <Header
                    title='Notificações'
                />

            </View>

            <View
                style={styles.content}
            >
                <Text>Expo Token: {expoToken}</Text>
                <Button title='Enviar Notificação'
                        onPress={ async () => notificarExpo()}   />
                <Button title='Ler ultima notificação clicada'
                        onPress={async () => exibirNotificacao()}/>
                <Button title='Ler notificações não clicadas'/>
                

            </View>

            <View>
                <Footer/>
            </View>
        </View>

    )

}

export default Notify;