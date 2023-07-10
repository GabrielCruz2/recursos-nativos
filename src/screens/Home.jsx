import * as React from 'react';

import { Button, View, Text } from 'react-native';

export default function Home({navigation}){
    return(
        <View>
            <Button title='Informações da Bateria' onPress={() => navigation.navigate('BatteryInfo')} />
            <Button title='Informações do Dispositivo' onPress={() => navigation.navigate('DeviceInfo')} />
            <Button title='ScreenOrientation' onPress={() => navigation.navigate('ScreenOrientation')} />
            <Button title='Notify' onPress={() => navigation.navigate('Notify')} />
            <Button title='ContactsInfo' onPress={() => navigation.navigate('ContactsInfo')} />
            <Button title='agendarnotificacao' onPress={() => navigation.navigate('agendarnotificacao')} />

            <Text>#PROFESSOR RENAN O MELHOR | Gabriel Da Cruz 3 INFO.</Text>
        </View>
    )
}